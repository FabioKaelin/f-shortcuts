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
                },
                {
                    "name": "Navigate with Focus",
                    "shortcuts": [
                        {
                            "description": "Go to definition",
                            "keys": "F12 or ctrl + click"
                        },
                        {
                            "description": "Focus on Editor",
                            "keys": "alt + e"
                        },
                        {
                            "description": "Focus on Primary Site Bar (Explorer/Files)",
                            "keys": "alt + f"
                        },
                        {
                            "description": "Focus on Terminal",
                            "keys": "alt + t"
                        },
                        {
                            "description": "Focus on Terminal manager",
                            "keys": "alt + shift + t"
                        },
                        {
                            "description": "Open terporary/preview file",
                            "keys": "space"
                        },
                    ]
                },
                {
                    "name": "Workspace",
                    "shortcuts": [
                        {
                            "description": "Open File",
                            "keys": "ctrl + o"
                        },
                        {
                            "description": "Open Folder",
                            "keys": "ctrl + k ctrl + o"
                        },
                        {
                            "description": "Open Workspace from file",
                            "keys": "ctrl + k ctrl + i"
                        },
                        {
                            "description": "New File in editor",
                            "keys": "ctrl + n"
                        },
                        {
                            "description": "New Folder in explorer",
                            "keys": "ctrl + shift + n"
                        },
                    ]
                }
            ]
        },
        {
            "name": "Linux (Ubuntu)",
            "description": "My favorite operating system",
            "categories": [
                {
                    "name": "General",
                    "shortcuts": [
                        {
                            "description": "Open terminal",
                            "keys": "super + t or ctrl + alt + t"
                        },
                        {
                            "description": "Open file explorer (nautilus)",
                            "keys": "super + e or ctrl + alt + f"
                        },
                        {
                            "description": "Open settings",
                            "keys": "super + i"
                        },
                        {
                            "description": "Open chrome",
                            "keys": "super + 1"
                        },
                        {
                            "description": "Open taskbar application",
                            "keys": "super + number"
                        },
                        {
                            "description": "lock screen",
                            "keys": "super + l"
                        },
                        {
                            "description": "close window",
                            "keys": "alt + f4"
                        },
                        {
                            "description": "open application menu",
                            "keys": "super"
                        },
                        {
                            "description": "shutdown",
                            "keys": "alt + shift + f4"
                        },
                        {
                            "description": "switch between windows",
                            "keys": "alt + tab"
                        },
                        {
                            "description": "switch desktops",
                            "keys": "super + alt + left/right"
                        },
                    ]
                }
            ]
        },
        {
            "name": "Google Chrome",
            "description": "My favorite browser",
            "categories": [
                {
                    "name": "General",
                    "shortcuts": [
                        {
                            "description": "Open new tab",
                            "keys": "ctrl + t"
                        },
                        {
                            "description": "Open new window",
                            "keys": "ctrl + n"
                        },
                        {
                            "description": "Open new incognito window",
                            "keys": "ctrl + shift + n"
                        },
                        {
                            "description": "Close tab",
                            "keys": "ctrl + w"
                        },
                        {
                            "description": "Navigate to search bar and execute google search",
                            "keys": "ctrl + k"
                        },
                        {
                            "description": "Navigate to search bar",
                            "keys": "ctrl + l"
                        },
                    ]
                }
            ]
        },
        {
            "name": "Windows",
            "description": "second class operating system",
            "categories": [
                {
                    "name": "General",
                    "shortcuts": [
                        {
                            "description": "Open settings",
                            "keys": "windows + i"
                        },
                        {
                            "description": "Open task manager",
                            "keys": "ctrl + shift + esc"
                        },
                        {
                            "description": "lock screen",
                            "keys": "windows + l"
                        },
                        {
                            "description": "switch between windows",
                            "keys": "alt + tab"
                        },
                        {
                            "description": "switch desktops",
                            "keys": "windows + ctrl + left/right"
                        },
                        {
                            "description": "open start menu",
                            "keys": "windows"
                        },
                        {
                            "description": "close window",
                            "keys": "alt + f4"
                        },
                        {
                            "description": "open browser",
                            "keys": "windows + 1"
                        },
                        {
                            "description": "open taskbar application",
                            "keys": "windows + number"
                        },
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
