export default class KeyboardHelper {
    static async getKeyboard() {
        return {
            "type": "keyboard",
            "buttons": [
                [
                    {
                        "label": "🎨 Generate Art",
                        "type": "text",
                        "payload": "generate_art"
                    }
                ],
                [
                    {
                        "label": "📚 Help",
                        "type": "text",
                        "payload": "help"
                    }
                ]
            ]
        }
    }
}