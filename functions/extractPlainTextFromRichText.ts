function extractPlainTextFromRichText(richText: { content: any; }) {
    if (!richText || typeof richText !== "object") return "";

    function walk(node: { map: (arg0: (node: any) => any) => any[]; type: any; text: any; content: any; }) {
        if (!node) return "";

        if (Array.isArray(node)) {
            return node.map(walk).join(" ");
        }

        switch (node.type) {
            case "text":
                return node.text || "";

            case "paragraph":
            case "heading":
            case "blockquote":
                return node.content ? walk(node.content) + "\n\n" : "";

            case "bullet_list":
            case "ordered_list":
                return node.content ? walk(node.content) + "\n" : "";

            case "list_item":
                return "- " + walk(node.content) + "\n";

            case "code_block":
                return node.content ? walk(node.content) + "\n\n" : "";

            case "image":
            case "horizontal_rule":
            case "embed":
                return "";

            default:
                return node.content ? walk(node.content) : "";
        }
    }

    return walk(richText.content).trim();
}

export default extractPlainTextFromRichText