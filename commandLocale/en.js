/*
ONLY EDIT THE Description AND THE Options OTHERWISE IT WILL BREAK THE BOT
*/

const commandLanguage = {
    code: "en", // https://www.science.co.il/language/Locale-codes.php
    comLang: {}
}

const Options = {
    bool: "<true | false>",
    number: "<number>",
    channelMention: "<#channel>",
    role: "<@role | roleID>",
    roleMulti: "<@role/s | roleID/s>",
    user: "<@user | userID>",
    userMulti: "<@user/s | userID/s>",
    channel: "<#channel | channelID>",
    channelMulti: "<#channel/s | channelID/s>",
    roleOrUser: "<@role | @user | roleID | userID>",
    roleOrUserMulti: "<@role/s | @user/s | roleID/s | userID/s>",
    bypassAll: "<@role | @user | #channel | roleID | userID | channelID >",
    userID: "<userID>",
    message: "<message>",
    link: "<link>",
    seconds: "<seconds>"
}

commandLanguage.comLang = {
    "Link": {
        "Name": "Link",
        "Description": "Displays all commands related to link moderation",
        "Categories": {
            "Blacklist": {
                "Name": "Link Blacklist",
                "Description": "View commands for blacklist",
                "Commands": {
                    "Link Blacklist Add": {
                        "Options": Options.link,
                        "Description": "Blacklists a link (SERVER ONLY)"
                    },
                    "Link Blacklist Remove": {
                        "Options": Options.link,
                        "Description": "Removes a link from the server blacklist (SERVER ONLY)"
                    },
                    "Link Blacklist All": {
                        "Options": Options.bool,
                        "Description": "Blacklists all links (SERVER ONLY)"
                    }
                }
            },
            "Whitelist": {
                "Name": "Link Whitelist",
                "Description": "View commands for whitelist",
                "Commands": {
                    "Link Whitelist Add": {
                        "Options": Options.link,
                        "Description": "Whitelists a link (SERVER ONLY)"
                    },
                    "Link Whitelist Remove": {
                        "Options": Options.link,
                        "Description": "Removes a link from the server whitelist (SERVER ONLY)"
                    }
                }
            },
            "Bypass": {
                "Name": "Link Bypass",
                "Description": "View commands for bypass",
                "Commands": {
                    "Link Bypass Add": {
                        "Options": Options.bypassAll,
                        "Description": "Bypasses a user or role from link scanning"
                    },
                    "Link Bypass Remove": {
                        "Options": Options.bypassAll,
                        "Description": "Removes a bypassed user or role"
                    },
                    "Link Bypass Clear": {
                        "Options": "",
                        "Description": "Clears the bypass list"
                    }
                }
            },
            "Scanners": {
                "Name": "Link Scanners",
                "Description": "Scanner options",
                "Categories": {
                    "VirusTotal": {
                        "Name": "Link Scanners VirusTotal",
                        "Description": "VirusTotal Options",
                        "Commands": {
                            "Link Scanners VirusTotal Enable": {
                                "Options": Options.bool,
                                "Description": "Enables VirusTotal"
                            },
                            "Link Scanners VirusTotal Detections": {
                                "Options": Options.number,
                                "Description": "The minimum number of detections required for action to be taken"
                            }
                        }
                    },
                    "BlockListProject": {
                        "Name": "Link Scanners BlockListProject",
                        "Description": "[BlockListProject](https://github.com/blocklistproject/Lists) Options",
                        "Commands": {
                            "Link Scanners BlockListProject Enable": {
                                "Options": Options.bool,
                                "Description": "Enables BlockListProject Database"
                            },
                            "Link Scanners BlockListProject Malware": {
                                "Options": Options.bool,
                                "Description": "Enables BlockListProject's malware database"
                            },
                            "Link Scanners BlockListProject Crypto": {
                                "Options": Options.bool,
                                "Description": "Enables BlockListProject's crypto database"
                            },
                            "Link Scanners BlockListProject Fraud": {
                                "Options": Options.bool,
                                "Description": "Enables BlockListProject's fraud database"
                            },
                            "Link Scanners BlockListProject Scam": {
                                "Options": Options.bool,
                                "Description": "Enables BlockListProject's scam database"
                            },
                            "Link Scanners BlockListProject Ransomware": {
                                "Options": Options.bool,
                                "Description": "Enables BlockListProject's ransomware database"
                            },
                            "Link Scanners BlockListProject Phishing": {
                                "Options": Options.bool,
                                "Description": "Enables BlockListProject's phishing database"
                            }
                        }
                    },
                    "GoogleSafeBrowsing": {
                        "Name": "Link Scanners GoogleSafeBrowsing",
                        "Description": "GoogleSafeBrowsing options",
                        "LongDescription": "GoogleSafeBrowsing options\nClick [here](https://safebrowsing.google.com/#policies) for info on categories",
                        "Commands": {
                            "Link Scanners GoogleSafeBrowsing Enable": {
                                "Options": Options.bool,
                                "Description": "Enables GoogleSafeBrowsing Scanner"
                            },
                            "Link Scanners GoogleSafeBrowsing SocialEngineering": {
                                "Options": Options.bool,
                                "Description": "Enables GoogleSafeBrowsing socialEngineering category"
                            },
                            "Link Scanners GoogleSafeBrowsing UnwantedSoftware": {
                                "Options": Options.bool,
                                "Description": "Enables GoogleSafeBrowsing unwantedSoftware category"
                            },
                            "Link Scanners GoogleSafeBrowsing PotentiallyHarmful": {
                                "Options": Options.bool,
                                "Description": "Enables GoogleSafeBrowsing potentially harmful category"
                            }
                        }
                    }
                }
            }
        },
        "Commands": {
            "Link Enable": {
                "Options": Options.bool,
                "Description": "Enables/disables link scanning"
            },
            "Link Setup": {
                "Options": "",
                "Description": "Sets up link scanning with default settings"
            },
            "Link Delay": {
                "Options": Options.seconds,
                "Description": "The amount of time before the number of offenses are reset"
            },
            "Link <Delete | Warn | Mute | Kick | Ban>": {
                "Options": "<number of offenses>",
                "Description": "how many offenses until the action is taken"
            },
            "Link Reactions": {
                "Options": Options.bool,
                "Description": "Enables/disables reactions"
            },
            "Link reactions Keep": {
                "Options": Options.bool,
                "Description": "If enabled the reactions will not be removed after some time"
            }
        }
    },
    "Permissions": {
        "Name": "Permissions",
        "Description": "Presents the commands related to letting your server mods and admins interact with the bot",
        "Commands": {
            "Permissions Add": {
                "Options": Options.role + " <perm(s)>",
                "Description": "Adds permissions to a role"
            },
            "Permissions Remove": {
                "Options": Options.role + " <perm(s)>",
                "Description": "Removes permissions from a role"
            },
            "Permissions Preset": {
                "Options": "<preset> " + Options.role,
                "Description": "Lists presets permissions and gives a role those permissions"
            },
            "Permissions Preset List": {
                "Options": "",
                "Description": "Lists presets"
            },
            "Permissions List": {
                "Options": "",
                "Description": "Lists all permissions"
            },
            "Permissions List Roles": {
                "Options": "",
                "Description": "Lists roles"
            },
            "Permissions List Role": {
                "Options": Options.role,
                "Description": "Lists permissions for a role"
            }
        }
    },
    "Warn": {
        "Name": "Warn",
        "Description": "Displays the settings associated with how many warnings a user can get and what actions to perform when a user gets so many",
        "Commands": {
            "Warn": {
                "Options": Options.user + " <reason>",
                "Description": "Warns a user"
            },
            "Warn List": {
                "Options": Options.user,
                "Description": "Lists all warns for a user"
            },
            "Warn Clear": {
                "Options": "<warnid>",
                "Description": "Removes a warning"
            },
            "Warn Clear All": {
                "Options": Options.user,
                "Description": "Clears all a user's warnings"
            },
            "Warn Limit Kick": {
                "Options": "<warnings>",
                "Description": "Disable or Enabled autokick (0 disables)"
            },
            "Warn Limit Ban": {
                "Options": "<warnings>",
                "Description": "Disable or Enabled autoban (0 disables)"
            }
        }
    },
    "Mute": {
        "Name": "Mute",
        "Description": "Presents all the mute settings and commands",
        "Commands": {
            "Mute": {
                "Options": Options.user + " <minutes> <reason>",
                "Description": "Mutes a user"
            },
            "Unmute": {
                "Options": Options.user,
                "Description": "Unmutes a user"
            },
            "Mute SetRole": {
                "Options": Options.role,
                "Description": "Sets the muted role"
            }
        }
    },
    "Moderation": {
        "Name": "Moderation",
        "Description": "Presents all moderation commands",
        "Commands": {
            "Purge": {
                "Options": "<amount> <all | @user | word>",
                "Description": "Purges the channel"
            },
            "Kick": {
                "Options": Options.userMulti + " <reason>",
                "Description": "Kicks a user"
            },
            "Ban": {
                "Options": Options.userMulti + " <reason>",
                "Description": "Bans a user"
            },
            "Ban Clean": {
                "Options": "",
                "Description": "Removes Deleted Users from bans"
            },
            "Unban": {
                "Options": Options.userID,
                "Description": "Unbans a user"
            },
            "Hackban": {
                "Options": Options.userID + " <reason>",
                "Description": "Bans a user who is not on the server"
            },
            "<Kick | Ban | UnBan | HackBan> Limit": {
                "Options": Options.bool,
                "Description": "Enables <Kick | Ban | UnBan | HackBan> limits for moderators"
            },
            "<Kick | Ban | UnBan | HackBan> Limit Delay": {
                "Options": "<delay>",
                "Description": "Sets the delay before moderators limits reset"
            },
            "<Kick | Ban | UnBan | HackBan> Limit Add": {
                "Options": Options.roleMulti + " <limit>",
                "Description": "Adds a limit for a role"
            },
            "<Kick | Ban | UnBan | HackBan> Limit Remove": {
                "Options": Options.roleMulti,
                "Description": "Removes a limit for a role"
            }
        }
    },
    "AutoMod": {
        "Name": "AutoMod",
        "Description": "Presents all the automod commands",
        "Commands": {
            "AutoMod Setup": {
                "Options": "",
                "Description": "Sets up automod with default settings"
            }
        },
        "Categories": {
            "AntiDupe": {
                "Name": "AutoMod AntiDupe",
                "Description": "View commands for AntiDupe module",
                "Commands": {
                    "AutoMod AntiDupe Enable": {
                        "Options": Options.bool,
                        "Description": "Enables or disables the antidupe module"
                    },
                    "AutoMod AntiDupe Delay": {
                        "Options": Options.seconds,
                        "Description": "The minimum amount of time before someone can send the same message. 100 seconds max"
                    },
                    "AutoMod AntiDupe Bypass": {
                        "Options": Options.bypassAll,
                        "Description": "Bypasses a user, role or channel"
                    },
                    "AutoMod AntiDupe Bypass remove": {
                        "Options": Options.bypassAll,
                        "Description": "Removes a bypassed user, role or channel"
                    },
                    "AutoMod AntiDupe Bypass clear": {
                        "Options": "",
                        "Description": "Clears the bypass"
                    },
                    "AutoMod AntiDupe <Delete | Warn | Mute | Kick | Ban>": {
                        "Options": "<number of messages>",
                        "Description": "How many of the same messages can be sent before they are deleted"
                    }
                }
            },
            "AntiSpam": {
                "Name": "AutoMod AntiSpam",
                "Description": "View commands for AntiSpam module",
                "Commands": {
                    "AutoMod AntiSpam Enable": {
                        "Options": Options.bool,
                        "Description": "Enables or disables the antispam module"
                    },
                    "AutoMod AntiSpam Delay": {
                        "Options": Options.seconds,
                        "Description": "The minimum amount of time before someone can send another message. 100 seconds max"
                    },
                    "AutoMod AntiSpam Bypass": {
                        "Options": Options.bypassAll,
                        "Description": "Bypasses a user, role or channel"
                    },
                    "AutoMod AntiSpam Bypass remove": {
                        "Options": Options.bypassAll,
                        "Description": "Removes a bypassed user, role or channel"
                    },
                    "AutoMod AntiSpam Bypass clear": {
                        "Options": "",
                        "Description": "Clears the bypass"
                    },
                    "AutoMod AntiSpam <Delete | Warn | Mute | Kick | Ban>": {
                        "Options": "<number of messages>",
                        "Description": "Perform the action at a certain amount of messages"
                    }
                }
            },
            "AntiJoinSpam": {
                "Name": "AutoMod AntiJoinSpam",
                "Description": "View commands for AntiJoinSpam module",
                "Commands": {
                    "AutoMod AntiJoinSpam Enable": {
                        "Options": Options.bool,
                        "Description": "Enables or disables the antijoinspam module"
                    },
                    "AutoMod AntiJoinSpam Delay": {
                        "Options": Options.seconds,
                        "Description": "The minimum amount of time before someone can join the server again. 100 seconds max"
                    },
                    "AutoMod AntiJoinSpam Bypass": {
                        "Options": Options.user,
                        "Description": "Bypasses a user"
                    },
                    "AutoMod AntiJoinSpam Bypass remove": {
                        "Options": Options.user,
                        "Description": "Removes a bypassed user"
                    },
                    "AutoMod AntiJoinSpam Bypass clear": {
                        "Options": "",
                        "Description": "Clears the bypass"
                    },
                    "AutoMod AntiSpam Ban": {
                        "Options": "<number of joins>",
                        "Description": "Bans the user when they get x amount of joins"
                    }
                }
            },
            "MaxMentions": {
                "Name": "AutoMod MaxMentions",
                "Description": "View commands for MaxMentions module",
                "Commands": {
                    "AutoMod MaxMentions Enable": {
                        "Options": Options.bool,
                        "Description": "Enable or Disable the maxmentions module"
                    },
                    "AutoMod MaxMentions <Delete | Warn | Mute | Kick | Ban>": {
                        "Options": "<messages>",
                        "Description": "The action to perform when you send to many mentions"
                    },
                    "AutoMod MaxMentions Delay": {
                        "Options": Options.seconds,
                        "Description": "The minimum amount of time before someone can send more mentions"
                    },
                    "AutoMod MaxMentions Bypass": {
                        "Options": Options.bypassAll,
                        "Description": "Bypasses a user, role or channel"
                    },
                    "AutoMod MaxMentions Bypass remove": {
                        "Options": Options.bypassAll,
                        "Description": "Removes a bypassed user, role or channel"
                    },
                    "AutoMod MaxMentions Bypass clear": {
                        "Options": "",
                        "Description": "Clears the bypass"
                    }
                }
            },
            "MaxRoleMentions": {
                "Name": "AutoMod MaxRoleMentions",
                "Description": "View commands for MaxRoleMentions module",
                "Commands": {
                    "AutoMod MaxRoleMentions Enable": {
                        "Options": Options.bool,
                        "Description": "Enable or Disable the maxrolementions module"
                    },
                    "AutoMod MaxRoleMentions Bypass": {
                        "Options": Options.bypassAll,
                        "Description": "Bypasses a user, role or channel"
                    },
                    "AutoMod MaxRoleMentions Bypass remove": {
                        "Options": Options.bypassAll,
                        "Description": "Removes a bypassed user, role or channel"
                    },
                    "AutoMod MaxRoleMentions Bypass clear": {
                        "Options": "",
                        "Description": "Clears the bypass"
                    },
                    "AutoMod MaxRoleMentions <Delete | Warn | Mute | Kick | Ban>": {
                        "Options": "<number of messages>",
                        "Description": "The action to perform when someone send to many role mentions"
                    },
                    "AutoMod MaxRoleMentions Delay": {
                        "Options": Options.seconds,
                        "Description": "The minimum amount of time before someone can mention another role"
                    }
                }
            },
            "MaxEmojis": {
                "Name": "AutoMod MaxEmojis",
                "Description": "View commands for MaxEmojis module",
                "Commands": {
                    "AutoMod MaxEmojis Enable": {
                        "Options": Options.bool,
                        "Description": "Enable or Disable the MaxEmojis module"
                    },
                    "AutoMod MaxEmojis Bypass": {
                        "Options": Options.bypassAll,
                        "Description": "Bypasses a user, role or channel"
                    },
                    "AutoMod MaxEmojis Bypass remove": {
                        "Options": Options.bypassAll,
                        "Description": "Removes a bypassed user, role or channel"
                    },
                    "AutoMod MaxEmojis Bypass clear": {
                        "Options": "",
                        "Description": "Clears the bypass"
                    },
                    "AutoMod MaxEmojis <Delete | Warn | Mute | Kick | Ban>": {
                        "Options": "<number of messages>",
                        "Description": "The action to perform when someone sends x amount of emojis"
                    },
                    "AutoMod MaxEmojis Delay": {
                        "Options": Options.seconds,
                        "Description": "The minimum amount of time before someone can send another emoji"
                    }
                }
            },
            "AntiZalgo": {
                "Name": "AutoMod AntiZalgo Enable",
                "Description": "View commands for MaxZalgo module",
                "Commands": {
                    "AutoMod AntiZalgo": {
                        "Options": Options.bool,
                        "Description": "Enable or Disable the AntiZalgo module"
                    },
                    "AutoMod AntiZalgo Bypass": {
                        "Options": Options.bypassAll,
                        "Description": "Bypasses a user, role or channel"
                    },
                    "AutoMod AntiZalgo Bypass remove": {
                        "Options": Options.bypassAll,
                        "Description": "Removes a bypassed user, role or channel"
                    },
                    "AutoMod AntiZalgo Bypass clear": {
                        "Options": "",
                        "Description": "Clears the bypass"
                    },
                    "AutoMod AntiZalgo <Delete | Warn | Mute | Kick | Ban>": {
                        "Options": "<number of messages>",
                        "Description": "The action to perform when someone sends to many zalgo messages"
                    },
                    "AutoMod AntiZalgo Delay": {
                        "Options": Options.seconds,
                        "Description": "The minimum amount of time before someone can send another message containing zalgo"
                    }
                }
            }
        }
    },
    "EventMessages": {
        "Name": "EventMessages",
        "Description": "Presents all the eventmessages commands\nVariables:\n`username` `discriminator` `mention` `servername` `channelmention` `channelname`",
        "Categories": {
            "Welcome": {
                "Name": "EventMessages Welcome",
                "Description": "View commands for Welcome module\nSpecific Variables:\n`invite` `inviter` `invitermention`",
                "Commands": {
                    "EventMessages Welcome Enable": {
                        "Options": Options.bool,
                        "Description": "Enables or Disables welcome messages"
                    },
                    "EventMessages Welcome Channel": {
                        "Options": Options.channelMention,
                        "Description": "Sets the channel for the message"
                    },
                    "EventMessages Welcome Message": {
                        "Options": Options.message,
                        "Description": "Sets the message"
                    },
                    "EventMessages Welcome Test": {
                        "Options": "",
                        "Description": "Print a test version of your message"
                    }
                }
            },
            "Goodbye": {
                "Name": "EventMessages Goodbye",
                "Description": "View commands for Goodbye module",
                "Commands": {
                    "EventMessages Goodbye Enable": {
                        "Options": Options.bool,
                        "Description": "Enables or Disables goodbye messages"
                    },
                    "EventMessages Goodbye Channel": {
                        "Options": Options.channelMention,
                        "Description": "Sets the channel for the message"
                    },
                    "EventMessages Goodbye Message": {
                        "Options": Options.message,
                        "Description": "Sets the message"
                    },
                    "EventMessages Goodbye Test": {
                        "Options": "",
                        "Description": "Print a test version of your message"
                    }
                }
            },
            "Kick": {
                "Name": "EventMessages Kick",
                "Description": "View commands for Kick module\nSpecific Variables:\n`reason`",
                "Commands": {
                    "EventMessages Kick Enable": {
                        "Options": Options.bool,
                        "Description": "Enables or Disables kick messages"
                    },
                    "EventMessages Kick Channel": {
                        "Options": Options.channelMention,
                        "Description": "Sets the channel for the message"
                    },
                    "EventMessages Kick Message": {
                        "Options": Options.message,
                        "Description": "Sets the message"
                    },
                    "EventMessages Kick Test": {
                        "Options": "",
                        "Description": "Print a test version of your message"
                    }
                }
            },
            "Ban": {
                "Name": "EventMessages Ban",
                "Description": "View commands for Ban module\nSpecific Variables:\n`reason`",
                "Commands": {
                    "EventMessages Ban Enable": {
                        "Options": Options.bool,
                        "Description": "Enables or Disables ban messages"
                    },
                    "EventMessages Ban Channel": {
                        "Options": Options.channelMention,
                        "Description": "Sets the channel for the message"
                    },
                    "EventMessages Ban Message": {
                        "Options": Options.message,
                        "Description": "Sets the message"
                    },
                    "EventMessages Ban Test": {
                        "Options": "",
                        "Description": "Print a test version of your message"
                    }
                }
            }
        }
    },
    "Filter": {
        "Name": "Filter",
        "Description": "Displays commands allowing you to filter phrases/invites on your server",
        "CategoriesFirst": false,
        "Categories": {
            "Word": {
                "Name": "Filter Word",
                "Description": "View commands for the word module",
                "Commands": {
                    "Filter Word Enable": {
                        "Options": Options.bool,
                        "Description": "Enables the word filtering module"
                    },
                    "Filter Word Add": {
                        "Options": "<word / phrase>",
                        "Description": "Adds words or phrases to the word filter (You can multiple by separating them with a |) for example word1|phrase 1|yeet|phrase 2 with more words"
                    },
                    "Filter Word Remove": {
                        "Options": "<word or phrase>",
                        "Description": "Removes words or phrases from the word filter (You can multiple by separating them with a |) for example word1|phrase 1|yeet|phrase 2 with more words"
                    },
                    "Filter Word Remove All": {
                        "Options": "",
                        "Description": "Removes all words or phrases from the word filter"
                    },
                    "Filter Word List": {
                        "Options": "",
                        "Description": "Lists the words added to word filter"
                    },
                    "Filter Word Mode": {
                        "Options": "<strict / normal / nice>",
                        "Description": "Sets how harsh the detection system for words is"
                    }
                }
            },
            "IP": {
                "Name": "Filter IP",
                "Description": "View commands for the IP module",
                "Commands": {
                    "Filter IP Enable": {
                        "Options": Options.bool,
                        "Description": "Enables the IP filtering module"
                    },
                    "Filter IP IPv4": {
                        "Options": Options.bool,
                        "Description": "Enables filtering of IPv4 addresses"
                    },
                    "Filter IP IPv6": {
                        "Options": Options.bool,
                        "Description": "Enables filtering of IPv6 addresses"
                    },
                    "Filter IP IgnoreLan": {
                        "Options": Options.bool,
                        "Description": "Filter will ignore local ip addresses (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, fd00::/8)"
                    },
                    "Filter IP IgnoreLocalHost": {
                        "Options": Options.bool,
                        "Description": "Filter will ignore localhost ip addresses (127.0.0.1, ::1)"
                    }
                }
            },
            "Invite": {
                "Name": "Filter Invite",
                "Description": "View commands for the invite module",
                "Commands": {
                    "Filter Invite Enable": {
                        "Options": Options.bool,
                        "Description": "Enables the invite filtering module"
                    },
                    "Filter Invite IgnoreOwn": {
                        "Options": Options.bool,
                        "Description": "Ignores the server's own invites"
                    }
                }
            }
        },
        "Commands": {
            "Filter Enable": {
                "Options": Options.bool,
                "Description": "Enables/disables the filter module for messages"
            },
            "Filter Setup": {
                "Options": "",
                "Description": "Enables/disables the filter module for messages"
            },
            "Filter Delay": {
                "Options": Options.seconds,
                "Description": "The minimum amount of time before someone can send another message. 100 seconds max"
            },
            "Filter <Delete | Warn | Mute | Kick | Ban>": {
                "Options": "<number of offenses>",
                "Description": "How many of offenses can be sent before they are deleted"
            },
            "Filter Bypass": {
                "Options": Options.bypassAll,
                "Description": "Bypasses a user or role from the filter"
            },
            "Filter Bypass Remove": {
                "Options": Options.bypassAll,
                "Description": "Removes a bypassed user or role"
            },
            "Filter Bypass Clear": {
                "Options": "",
                "Description": "Clears the bypass list"
            }
        }
    },
    "Logging": {
        "Name": "Logging",
        "Description": "Logs ¯\\_(ツ)_/¯",
        "LongDescription": "Categories available:\n- all\n- mod\n- voice\n- message\n- server",
        "Commands": {
            "Logging Set": {
                "Options": "<category> " + Options.channel,
                "Description": "Sets a channel to log a category"
            },
            "Logging Remove": {
                "Options": "<category>",
                "Description": "Disables logging for a category"
            },
            "Logging Override": {
                "Options": "<override> " + Options.channel,
                "Description": "Overrides a type of log to a channel"
            },
            "Logging Override Removed": {
                "Options": "<override>",
                "Description": "Removes a override"
            },
            "Logging Override List": {
                "Options": "",
                "Description": "Lists available overrides"
            }
        }
    },
    "Utility": {
        "Name": "Utility",
        "Description": "Useful commands",
        "Categories": {
            "RolePersist": {
                "Name": "Utility RolePersist",
                "Description": "View commands for role persist",
                "Commands": {
                    "Utility RolePersist Enable": {
                        "Options": Options.bool,
                        "Description": "Enables/disables role persist"
                    },
                    "Utility RolePersist Remove": {
                        "Options": Options.user,
                        "Description": "Removes a user's role persist"
                    },
                }
            },
            "AutoRole": {
                "Name": "Utility AutoRole",
                "Description": "View commands for auto role",
                "Commands": {
                    "Utility AutoRole Enable": {
                        "Options": Options.bool,
                        "Description": "Enables/disables auto role"
                    },
                    "Utility AutoRole Add": {
                        "Options": Options.roleMulti,
                        "Description": "Adds a role to auto role"
                    },
                    "Utility AutoRole Remove": {
                        "Options": Options.roleMulti,
                        "Description": "Removes a role from auto role"
                    },
                }
            },
        },
        "Commands": {
            "UserInfo": {
                "Options": Options.user,
                "Description": "Retrieves info about a user"
            },
            "InviteInfo": {
                "Options": "<code>",
                "Description": "Retrieves info about an invite"
            },
            "GuildInfo": {
                "Options": "",
                "Description": "Retrieves info about a guild"
            },
            "Prefix": {
                "Options": "<Prefix>",
                "Description": "Sets the prefix for the bot"
            }
        }
    },
    "Other": {
        "Name": "Other",
        "Description": "Miscellaneous commands: Inviting the bot, support...",
        "Commands": {
            "Stats": {
                "Options": "",
                "Description": "The stats of the bot"
            },
            "Ping": {
                "Options": "",
                "Description": "Returns the ping of the bot"
            },
            "Invite": {
                "Options": "",
                "Description": "Invite link for the bot"
            },
            "Support": {
                "Options": "",
                "Description": "Invite link for the support discord"
            },
            "Credits": {
                "Options": "",
                "Description": "Who made the bot"
            }
        }
    },
    "Localisation": {
        "Name": "Localisation",
        "Description": "Timezone 🕙, Language 🇬🇧",
        "Commands": {
            "Timezone": {
                "Options": "<IANA Timezone>",
                "Description": "Set the timezone, responses from the bot containing a time will be in this time zone.\nList of [IANA Timezones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), do not use ones labeled as deprecated!"
            },
            "Language": {
                "Options": "<Language>",
                "Description": "Set the language of the bot, english 🇬🇧, español (spanish) 🇪🇸"
            }
        }
    }
};

module.exports = commandLanguage;