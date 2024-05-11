const jsonString: Shortcuts = {
    data: [
        {
            name: "Visual Studio Code",
            description: "My favorite text editor",
            categories: [
                {
                    name: "General",
                    shortcuts: [
                        {
                            description: "Open Commnad Palette",
                            keys: "F1"
                        },
                        {
                            description: "Open Settings",
                            keys: "Ctrl + ,"
                        }
                    ]
                },
                {
                    name: "Terminal",
                    shortcuts: [
                        {
                            description: "Toggle horizontal scrollbar",
                            keys: "alt + z"
                        },
                        {
                            description: "Change Terminal Focus (switch between terminal windows)",
                            keys: "ctrl + pgup / ctrl + pgdown"
                        },
                        {
                            description: "Change Terminal Focus in Terminal Group (switch between splited terminals)",
                            keys: "alt + pgup / alt + pgdown"
                        },
                        {
                            description: "Create new Terminal instance",
                            keys: "ctrl + t"
                        },
                        {
                            description: "Split Terminal",
                            keys: "ctrl + shift + 5"
                        },
                        {
                            description: "Close Terminal",
                            keys: "ctrl + w",
                            custom: true
                        }
                    ]
                },
                {
                    name: "Editor",
                    shortcuts: [
                        {
                            description: "Format",
                            keys: "F4"
                        },
                        {
                            description: "Get autocomplete popup",
                            keys: "Ctrl + Space"
                        },
                        {
                            description: "Get quick fix popup",
                            keys: "ctrl + ."
                        },
                        {
                            description: "Duplicate line",
                            keys: "alt + d alt + d"
                        },
                        {
                            description: "Move line",
                            keys: "alt + up / alt + down"
                        },
                        {
                            description: "Toggle comment",
                            keys: "ctrl + §"
                        },
                        {
                            description: "Delete Line",
                            keys: "ctrl + x or ctrl + alt + x"
                        },
                        {
                            description: "Toggle horizontal scrollbar",
                            keys: "alt + z"
                        },
                        {
                            description: "Rename reference (Variable, Function, etc.)",
                            keys: "F2"
                        },
                        {
                            description: "Save without formatting",
                            keys: "ctrl+ alt + s"
                        },
                        {
                            description: "Fold level",
                            keys: "ctrl + q ctrl + foldlevel(1-7)"
                        },
                        {
                            description: "Unfold",
                            keys: "ctrl + shift + q"
                        },
                        {
                            description: "Multiline cursor",
                            keys: "alt + click"
                        },
                        {
                            description: "Git file history",
                            keys: "alt + h"
                        }
                    ]
                },
                {
                    name: "Navigate with Focus",
                    shortcuts: [
                        {
                            description: "Go to definition",
                            keys: "F12 or ctrl + click"
                        },
                        {
                            description: "Focus on Editor",
                            keys: "alt + e",
                            custom: true
                        },
                        {
                            description: "Focus on Primary Site Bar (Explorer/Files)",
                            keys: "alt + f",
                            custom: true
                        },
                        {
                            description: "Focus on Terminal",
                            keys: "alt + t",
                            custom: true
                        },
                        {
                            description: "Focus on Terminal manager",
                            keys: "alt + shift + t",
                            custom: true
                        },
                        {
                            description: "Open terporary/preview file",
                            keys: "space"
                        },
                    ]
                },
                {
                    name: "Workspace",
                    shortcuts: [
                        {
                            description: "Open File",
                            keys: "ctrl + o"
                        },
                        {
                            description: "Open Folder",
                            keys: "ctrl + k ctrl + o"
                        },
                        {
                            description: "Open Workspace from file",
                            keys: "ctrl + k ctrl + i"
                        },
                        {
                            description: "New File in editor",
                            keys: "ctrl + n"
                        },
                        {
                            description: "New Folder in explorer",
                            keys: "ctrl + shift + n"
                        },
                    ]
                }
            ]
        },
        {
            name: "Firefox",
            description: "My favorite Browser",
            categories: [
                {
                    name: "General",
                    shortcuts: [
                        {
                            description: "Open new window",
                            keys: "ctrl + n"
                        },
                        {
                            description: "Open new private window",
                            keys: "ctrl + shift + p"
                        },
                        {
                            description: "Navigate to search bar (for url, bookmark-alias, google)",
                            keys: "ctrl + l or f6 or alt + d"
                        },
                        {
                            description: "Navigate to search bar (for google)",
                            keys: "ctrl + k or ctrl + e"
                        },
                        {
                            description: "Open history",
                            keys: "ctrl + h"
                        },
                        {
                            description: "Open downloads",
                            keys: "ctrl + j"
                        },
                        {
                            description: "Open developer tools",
                            keys: "ctrl + shift + i or f12"
                        }
                    ]
                },
                {
                    name: "Tabs",
                    shortcuts: [
                        {
                            description: "Open new tab",
                            keys: "ctrl + t"
                        },
                        {
                            description: "Close tab",
                            keys: "ctrl + w"
                        },
                        {
                            description: "Go to next tab",
                            keys: "ctrl + tab"
                        },
                        {
                            description: "Go to previous tab",
                            keys: "ctrl + shift + tab"
                        },
                        {
                            description: "Go to tab 1-8",
                            keys: "ctrl + 1-8"
                        },
                        {
                            description: "Go to last tab",
                            keys: "ctrl + 9"
                        },
                        {
                            description: "Reopen last closed tab",
                            keys: "ctrl + shift + t"
                        },
                        {
                            description: "Go back in history",
                            keys: "alt + left"
                        },
                        {
                            description: "Go forward in history",
                            keys: "alt + right"
                        }
                    ]
                },
                {
                    name: "Development",
                    shortcuts: [
                        {
                            description: "Open developer tools",
                            keys: "ctrl + shift + i or f12"
                        },
                        {
                            description: "reload page",
                            keys: "ctrl + r or f5"
                        },
                        {
                            description: "reload page (ignore cache)",
                            keys: "ctrl + shift + r or ctrl + f5"
                        },
                    ]
                },
                {
                    name: "custom aliases",
                    shortcuts: [
                        {
                            description:"Open GitHub on my profile",
                            keys:"gh",
                            custom: true
                        },
                        {
                            description:"Open my Tasks",
                            keys:"tasks",
                            custom: true
                        },
                        {
                            description:"Open localhost:3000",
                            keys:"3000",
                            custom: true
                        },
                        {
                            description:"Open localhost:5000",
                            keys:"5000",
                            custom: true
                        },
                        {
                            description:"Open localhost:5137",
                            keys:"5137",
                            custom: true
                        },
                        {
                            description:"Open localhost:8000",
                            keys:"8000",
                            custom: true
                        },
                        {
                            description:"Open localhost:8080",
                            keys:"8080",
                            custom: true
                        }
                    ]
                }
            ]
        },
        {
            name: "Linux (Ubuntu)",
            description: "My favorite operating system",
            categories: [
                {
                    name: "General",
                    shortcuts: [
                        {
                            description: "Open terminal",
                            keys: "super + t or ctrl + alt + t",
                            custom: true
                        },
                        {
                            description: "Open file explorer (nautilus)",
                            keys: "super + e or ctrl + alt + f",
                            custom: true
                        },
                        {
                            description: "Open settings",
                            keys: "super + i",
                            custom: true
                        },
                        {
                            description: "Open chrome",
                            keys: "super + 1",
                            custom: true
                        },
                        {
                            description: "Open taskbar application",
                            keys: "super + number"
                        },
                        {
                            description: "lock screen",
                            keys: "super + l"
                        },
                        {
                            description: "close window",
                            keys: "alt + f4"
                        },
                        {
                            description: "open application menu",
                            keys: "super"
                        },
                        {
                            description: "shutdown",
                            keys: "alt + shift + f4",
                            custom: true
                        },
                        {
                            description: "switch between windows",
                            keys: "alt + tab"
                        },
                        {
                            description: "switch desktops",
                            keys: "super + alt + left/right or super + pgup/pgdown"
                        },
                        {
                            description: "show notifications",
                            keys: "super + m or super + v"
                        },
                        {
                            description: "show desktop",
                            keys: "super + d"
                        },
                        {
                            description: "run command quick",
                            keys: "alt + f2"
                        },
                    ]
                },
                {
                    name: "Nautlius (file explorer)",
                    shortcuts: [
                        {
                            description: "Open new tab",
                            keys: "ctrl + t"
                        },
                        {
                            description: "close tab",
                            keys: "ctrl + w"
                        },
                        {
                            description: "Open new window",
                            keys: "ctrl + n"
                        },
                        {
                            description: "create new folder",
                            keys: "ctrl + shift + n"
                        },
                        {
                            description: "close tab",
                            keys: "ctrl + w"
                        },
                        {
                            description: "navigate to path bar",
                            keys: "ctrl + l"
                        },
                        {
                            description: "list view",
                            keys: "ctrl + 1"
                        },
                        {
                            description: "icon view",
                            keys: "ctrl + 2"
                        },
                        {
                            description: "rename file/folder",
                            keys: "f2"
                        },
                        {
                            description: "swicht to tab",
                            keys: "alt + number"
                        },
                        {
                            description: "close all naughty windows",
                            keys: "ctrl + q"
                        },
                    ]
                },
                {
                    name: "Terminal",
                    shortcuts: [
                        {
                            description: "Open new tab",
                            keys: "ctrl + shift + t"
                        },
                        {
                            description: "close tab",
                            keys: "ctrl + shift + w"
                        },
                        {
                            description: "Open new window",
                            keys: "ctrl + shift + n"
                        },
                        {
                            description: "close window",
                            keys: "ctrl + shift + q"
                        },
                        {
                            description: "switch to tab",
                            keys: "ctrl + pgup/pgdown"
                        },
                    ]
                }
            ]
        },
        {
            name: "Google Chrome",
            description: "My old favorite Browser",
            categories: [
                {
                    name: "General",
                    shortcuts: [
                        {
                            description: "Open new tab",
                            keys: "ctrl + t"
                        },
                        {
                            description: "Open new window",
                            keys: "ctrl + n"
                        },
                        {
                            description: "Open new incognito window",
                            keys: "ctrl + shift + n"
                        },
                        {
                            description: "Close tab",
                            keys: "ctrl + w"
                        },
                        {
                            description: "Navigate to search bar and execute google search",
                            keys: "ctrl + k or ctrl + e"
                        },
                        {
                            description: "Navigate to search bar",
                            keys: "ctrl + l"
                        },
                    ]
                }
            ]
        },
        {
            name: "Windows",
            description: "second-rate operating system",
            categories: [
                {
                    name: "General",
                    shortcuts: [
                        {
                            description: "Open settings",
                            keys: "windows + i"
                        },
                        {
                            description: "Open task manager",
                            keys: "ctrl + shift + esc"
                        },
                        {
                            description: "lock screen",
                            keys: "windows + l"
                        },
                        {
                            description: "switch between windows",
                            keys: "alt + tab"
                        },
                        {
                            description: "switch desktops",
                            keys: "windows + ctrl + left/right"
                        },
                        {
                            description: "open start menu",
                            keys: "windows"
                        },
                        {
                            description: "close window",
                            keys: "alt + f4"
                        },
                        {
                            description: "open browser",
                            keys: "windows + 1"
                        },
                        {
                            description: "open taskbar application",
                            keys: "windows + number"
                        },
                        {
                            description: "show acton center",
                            keys: "windows + a"
                        },
                    ]
                }
            ]
        },
        {
            name: "SpeedRunners",
            description: "A fun game",
            categories: [
                {
                    name: "Controll",
                    shortcuts: [
                        {
                            description: "Jump",
                            keys: "Space"
                        },
                        {
                            description: "Slide",
                            keys: "S"
                        },
                        {
                            description: "Left",
                            keys: "A"
                        },
                        {
                            description: "Right",
                            keys: "D"
                        },
                        {
                            description: "Boost",
                            keys: "LeftShift"
                        },
                        {
                            description: "Swap Weapon",
                            keys: "I"
                        },
                        {
                            description: "Use Item",
                            keys: "O"
                        },
                        {
                            description: "Grapple",
                            keys: "P"
                        },
                        {
                            description: "Pause",
                            keys: "Escape"
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
    custom?: boolean;
}


export function getShortcuts() {
    const data: Shortcuts = JSON.parse(JSON.stringify(jsonString))
    // const data = JSON.parse(JSON.stringify(JSON.parse(jsonString)))
    return data.data
}
