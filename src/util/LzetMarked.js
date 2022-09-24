import { marked } from 'marked';
import katex from "katex";

export function LzetMarked(text) {
    marked.setOptions({
        langPrefix: 'prism language-',
    });

    // https://marked.js.org/using_pro
    // $$
    const m3b = {
        name: 'm3b',
        level: 'block',
        start(src) {
            return src.match(/\$\$/)?.index;
        },    // Hint to Marked.js to stop and check for a match
        tokenizer(src, tokens) {
            const rule = /^\$\$([^\n]*?[^\n\\])\$\$/;  // Regex for the complete token
            const match = rule.exec(src);
            if (match) {
                return {                                     // Token to generate
                    type: 'm3b',                       // Should match "name" above
                    raw: match[0],                             // Text to consume from the source
                    exp: match[1].trim(),    // Additional custom properties
                };
            }
        },
        renderer(token) {
            return "\n" + katex.renderToString(token.exp, {
                throwOnError: false,
                displayMode: true,
            });
        }
    };

    // 保护html
    // <hrd>
    const hrdb = {
        name: 'hrdb',
        level: 'block',
        start(src) {
            return src.match(/<hrd>/)?.index;
        },    // Hint to Marked.js to stop and check for a match
        tokenizer(src, tokens) {
            const rule = /^<hrd>([^\n]*?[^\n\\])<\/hrd>/;  // Regex for the complete token
            const match = rule.exec(src);
            if (match) {
                return {                                     // Token to generate
                    type: 'hrdb',                       // Should match "name" above
                    raw: match[0],                             // Text to consume from the source
                    exp: match[1].trim(),    // Additional custom properties
                };
            }
        },
        renderer(token) {
            return "\n" + token.exp;
        }
    };

    // $
    const m3 = {
        name: 'm3',
        level: 'inline',                                 // Is this a block-level or inline-level tokenizer?
        start(src) {
            return src.match(/\$/)?.index;
        },    // Hint to Marked.js to stop and check for a match
        tokenizer(src, tokens) {
            const rule = /^\$([^\n]*?[^\n\\])\$/;  // Regex for the complete token
            const match = rule.exec(src);
            if (match) {
                return {                                     // Token to generate
                    type: 'm3',                       // Should match "name" above
                    raw: match[0],                             // Text to consume from the source
                    exp: match[1].trim(),    // Additional custom properties
                };
            }
        },
        renderer(token) {
            return "\n" + katex.renderToString(token.exp, {
                throwOnError: false,
                displayMode: false,
            });
        }
    };

    // marked.use({ extensions: [m3b] });
    // marked.use({ extensions: [hrdb] });
    // marked.use({ extensions: [m3] });

    // 把 \$ 先转译了
    // return marked(text.replace(/\\\$/g, "&#36;"));
    return marked.parse(text);
}