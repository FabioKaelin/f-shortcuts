const jsonString = {
    "data": [
        {
            "name": "Visual Studio Code",
            "description": "My favorite text editor",
            "categories": [
                {
                    "name": "General",
                    "shortcuts": [
                        {
                            "description": "Open Commnad Palette",
                            "keys": "F1"
                        },
                        {
                            "description": "Open Settings",
                            "keys": "Ctrl + ,"
                        }
                    ]
                },
                {
                    "name": "Terminal",
                    "shortcuts": [
                        {
                            "description": "Toggle horizontal scrollbar",
                            "keys": "alt z"
                        },
                        {
                            "description": "Change Terminal Focus (switch between terminal windows)",
                            "keys": "ctrl + pgup / ctrl + pgdown"
                        },
                        {
                            "description": "Change Terminal Focus in Terminal Group (switch between splited terminals)",
                            "keys": "alt + pgup / alt + pgdown"
                        },
                        {
                            "description": "Create new Terminal instance",
                            "keys": "ctrl + t"
                        },
                        {
                            "description": "Split Terminal",
                            "keys": "ctrl + shift + 5"
                        },
                        {
                            "description": "Close Terminal",
                            "keys": "ctrl + w"
                        }
                    ]
                },
                {
                    "name": "Editor",
                    "shortcuts": [
                        {
                            "description": "Format",
                            "keys": "F4"
                        },
                        {
                            "description": "Get autocomplete popup",
                            "keys": "Ctrl + Space"
                        },
                        {
                            "description": "Get quick fix popup",
                            "keys": "ctrl + ."
                        },
                        {
                            "description": "Duplicate line",
                            "keys": "alt + d alt + d"
                        },
                        {
                            "description": "Move line",
                            "keys": "alt + up / alt + down"
                        },
                        {
                            "description": "Toggle comment",
                            "keys": "ctrl + §"
                        },
                        {
                            "description": "Delete Line",
                            "keys": "ctrl + x or ctrl + alt + x"
                        },
                        {
                            "description": "Toggle horizontal scrollbar",
                            "keys": "alt z"
                        },
                        {
                            "description": "Rename reference (Variable, Function, etc.)",
                            "keys": "F2"
                        },
                        {
                            "description": "Save without formatting",
                            "keys": "ctrl + k ctrl + s"
                        },
                        {
                            "description": "Fold level",
                            "keys": "ctrl + q ctrl foldlevel(1-7)"
                        },
                        {
                            "description": "Unfold",
                            "keys": "ctrl + shift + q"
                        },
                        {
                            "description": "Multiline cursor",
                            "keys": "alt + click"
                        },
                        {
                            "description": "Git file history",
                            "keys": "alt + h"
                        }
                    ]
                }
            ]
        }
    ]
}

export interface Shortcuts {
    data: DataEntity[];
}
export interface DataEntity { // e.g. Visual Studio Code
    name: string;
    description: string;
    categories: CategoriesEntity[];
}
export interface CategoriesEntity { // e.g. General
    name: string;
    shortcuts: ShortcutsEntity[];
}
export interface ShortcutsEntity { // e.g. Open Command Palette
    description: string;
    keys: string;
}


export function getShortcuts() {
    const data: Shortcuts = JSON.parse(JSON.stringify(jsonString))
    // const data = JSON.parse(JSON.stringify(JSON.parse(jsonString)))
    return data.data
}
