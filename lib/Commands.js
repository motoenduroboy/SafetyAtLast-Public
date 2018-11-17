/*
ONLY EDIT THE Description AND THE Options OTHERWISE IT WILL BREAK THE BOT
Types:
0 - Commands
1 - Category
*/

module.exports = {
    "Link": {
        "Type": 0,
        "Description": "Displays all commands related to link moderation",
        "Commands": {
            "Link": {
                "Options": "<true | false>",
                "Description": "Enables/disables link scanning"
            },
            "Link blacklist": {
                "Options": "<link>",
                "Description": "Blacklists a link (SERVER ONLY)"
            },
            "Link blacklist remove": {
                "Options": "<link>",
                "Description": "Removes a link from the server blacklist (SERVER ONLY)"
            },
            "Link blacklist all": {
                "Options": "<true | false>",
                "Description": "Blacklists all links (SERVER ONLY)"
            },
            "Link whitelist": {
                "Options": "<link>",
                "Description": "Whitelists a link (SERVER ONLY)"
            },
            "Link whitelist remove": {
                "Options": "<link>",
                "Description": "Removes a link from the server whitelist (SERVER ONLY)"
            },
            "Link autowarn": {
                "Options": "<true | false>",
                "Description": "Enables/disables autowarn for link scanning"
            },
            "Link automute": {
                "Options": "<true | false>",
                "Description": "Enables/disables automute for link scanning"
            },
            "Link reactions": {
                "Options": "<true | false>",
                "Description": "Enables/disables reactions"
            },
            "Link bypass": {
                "Options": "<@mention / userid / @role / rolename>",
                "Description": "Bypasses a user or role from link scanning"
            },
            "Link bypass remove": {
                "Options": "<@mention / userid / @role / rolename>",
                "Description": "Removes a bypassed user or role"
            },
            "Link bypass clear": {
                "Options": "",
                "Description": "Clears the bypass list"
            }
        }
    },
    "Permissions": {
        "Type": 0,
        "Description": "Presents the commands related to letting your server mods and admins interact with the bot",
        "Commands": {
            "Permissions remove": {
                "Options": "<@role | roleid> <perm(s)>",
                "Description": "Removes permissions from a role"
            },
            "Permissions add": {
                "Options": "<@role | roleid> <perm(s)>",
                "Description": "Adds permissions to a role"
            },
            "Permissions preset": {
                "Options": "<preset> <@role | roleid>",
                "Description": "Lists presets permissions and gives a role those permissions"
            },
            "Permissions preset list": {
                "Options": "",
                "Description": "Lists presets"
            },
            "Permissions list": {
                "Options": "",
                "Description": "Lists all permissions"
            },
            "Permissions list roles": {
                "Options": "",
                "Description": "Lists roles"
            },
            "Permissions list role": {
                "Options": "<@role | name>",
                "Description": "Lists permissions for a role"
            }
        }
    },
    "Warn": {
        "Type": 0,
        "Description": "Displays the settings associated with how many warnings a user can get and what actions to perform when a user gets so many",
        "Commands": {
            "Warn": {
                "Options": "<@user/s | userid> <reason>",
                "Description": "Warns a user"
            },
            "Warn clear": {
                "Options": "<warnid>",
                "Description": "Removes a warning"
            },
            "Warn clear all": {
                "Options": "<@user | userid>",
                "Description": "Clears all a user's warnings"
            },
            "Warn limit kick": {
                "Options": "<warnings>",
                "Description": "Disable or Enabled autokick (0 disables)"
            },
            "Warn limit ban": {
                "Options": "<warnings>",
                "Description": "Disable or Enabled autoban (0 disables)"
            }
        }
    },
    "Mute": {
        "Type": 0,
        "Description": "Presents all the mute settings and commands",
        "Commands": {
            "Mute": {
                "Options": "<@user/s | userid> <minutes> <reason>",
                "Description": "Mutes a user"
            },
            "Unmute": {
                "Options": "<@user/s | userid>",
                "Description": "Unmutes a user"
            },
            "Mute setrole": {
                "Options": "<@role | rolename>",
                "Description": "Sets the muted role"
            }
        }
    },
    "Moderation": {
        "Type": 0,
        "Description": "Presents all moderation commands",
        "Commands": {
            "Purge": {
                "Options": "<amount> <all | @user | word>",
                "Description": "Purges the channel the command was executed in"
            },
            "Warn": {
                "Options": "<@user/s | userid> <reason>",
                "Description": "Warns a user"
            },
            "Warn clear": {
                "Options": "<warnid>",
                "Description": "Removes a warning"
            },
            "Warn clear all": {
                "Options": "<@user | userid>",
                "Description": "Clears all a user's warnings"
            },
            "Mute": {
                "Options": "<@user/s | userid> <minutes>",
                "Description": "Mutes a user"
            },
            "Unmute": {
                "Options": "<@user/s | userid>",
                "Description": "Unmutes a user"
            },
            "Kick": {
                "Options": "<@user | userid> <reason>",
                "Description": "Kicks a user"
            },
            "Ban": {
                "Options": "<@user | userid> <reason>",
                "Description": "Bans a user"
            },
            "Unban": {
                "Options": "<userid>",
                "Description": "Unbans a user"
            },
            "Hackban": {
                "Options": "<userid> <reason>",
                "Description": "Bans a user who is not on the server"
            }
        }
    },
    /*"DBans": {
        "Type": 0,
        "Description": "Shows the settings allowing you to customize what happens to users on bans.discordlist.net",
        "Commands": {
            "DBans": {
                "Options": "<true | false>",
                "Description": "Enables/disables the DBans module"
            },
            "DBans action": {
                "Options": "<ban / kick / mute>",
                "Description": "Sets the action to perform when a user is on DBans"
            },
            "DBans scan": {
                "Options": "",
                "Description": "Scans the whole server and performs the previously specified action"
            },
            "DBans bypass": {
                "Options": "<@mention / userid / @role / rolename>",
                "Description": "Bypasses a user or role from DBans"
            },
            "DBans bypass remove": {
                "Options": "<@mention / userid / @role / rolename>",
                "Description": "Removes a bypassed user or role"
            },
            "DBans bypass clear": {
                "Options": "",
                "Description": "Clears the bypass list"
            }
        }
    },*/
    "AutoMod": {
        "Type": 1,
        "Description": "TODO",
        "Categories": {
            "AntiDupe": {
                "Type": 0,
                "Description": "View commands for AntiDupe module",
                "Commands": {
                    "AutoMod AntiDupe": {
                        "Options": "<true | false>",
                        "Description": "Enables/disables the anti dupe module"
                    },
                    "AutoMod AntiDupe Delay": {
                        "Options": "<seconds>",
                        "Description": "The minimum amount of time before someone can send the same message. 100 seconds max"
                    },
                    "AutoMod AntiDupe Bypass": {
                        "Options": "<@user | userid | rolename | @role | #channel>",
                        "Description": "Bypasses a user, role or channel"
                    },
                    "AutoMod AntiDupe Bypass remove": {
                        "Options": "<@user | userid | rolename | @role | #channel>",
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
                "Type": 0,
                "Description": "View commands for AntiSpam module",
                "Commands": {
                    "AutoMod AntiSpam": {
                        "Options": "<true | false>",
                        "Description": "Enables/disables the anti spam module"
                    },
                    "AutoMod AntiSpam Delay": {
                        "Options": "<seconds>",
                        "Description": "TODO"
                    },
                    "AutoMod AntiSpam Bypass": {
                        "Options": "<@user | userid | rolename | @role | #channel>",
                        "Description": "Bypasses a user, role or channel"
                    },
                    "AutoMod AntiSpam Bypass remove": {
                        "Options": "<@user | userid | rolename | @role | #channel>",
                        "Description": "Removes a bypassed user, role or channel"
                    },
                    "AutoMod AntiSpam Bypass clear": {
                        "Options": "",
                        "Description": "Clears the bypass"
                    },
                    "AutoMod AntiSpam <Delete | Warn | Mute | Kick | Ban>": {
                        "Options": "<number of messages>",
                        "Description": "TODO"
                    }
                }
            },
            "AntiJoinSpam": {
                "Type": 0,
                "Description": "View commands for AntiJoinSpam module",
                "Commands": {
                    "AutoMod AntiJoinSpam": {
                        "Options": "<true | false>",
                        "Description": "Enables/disables the anti join spam module"
                    },
                    "AutoMod AntiJoinSpam Delay": {
                        "Options": "<seconds>",
                        "Description": "TODO"
                    },
                    "AutoMod AntiJoinSpam Bypass": {
                        "Options": "<@user | userid>",
                        "Description": "Bypasses a user"
                    },
                    "AutoMod AntiJoinSpam Bypass remove": {
                        "Options": "<@user | userid>",
                        "Description": "Removes a bypassed user"
                    },
                    "AutoMod AntiJoinSpam Bypass clear": {
                        "Options": "",
                        "Description": "Clears the bypass"
                    },
                    "AutoMod AntiSpam Ban": {
                        "Options": "<number of joins>",
                        "Description": "TODO"
                    }
                }
            },
            "MaxMentions": {
                "Type": 0,
                "Description": "View commands for MaxMentions module",
                "Commands": {
                    "AutoMod MaxMentions": {
                        "Options": "<true | false>",
                        "Description": "TODO"
                    },
                    "AutoMod MaxMentions <Delete | Warn | Mute | Kick | Ban>": {
                        "Options": "<messages>",
                        "Description": "TODO"
                    },
                    "AutoMod MaxMentions Delay": {
                        "Options": "<seconds>",
                        "Description": "TODO"
                    },
                    "AutoMod MaxMentions Bypass": {
                        "Options": "<@user | userid | rolename | @role | #channel>",
                        "Description": "Bypasses a user, role or channel"
                    },
                    "AutoMod MaxMentions Bypass remove": {
                        "Options": "<@user | userid | rolename | @role | #channel>",
                        "Description": "Removes a bypassed user, role or channel"
                    },
                    "AutoMod MaxMentions Bypass clear": {
                        "Options": "",
                        "Description": "Clears the bypass"
                    }
                }
            },
            "MaxRoleMentions": {
                "Type": 0,
                "Description": "View commands for MaxRoleMentions module",
                "Commands": {
                    "AutoMod MaxRoleMentions": {
                        "Options": "<true | false>",
                        "Description": "TODO"
                    },
                    "AutoMod MaxRoleMentions Bypass": {
                        "Options": "<@user | userid | rolename | @role | #channel>",
                        "Description": "Bypasses a user, role or channel"
                    },
                    "AutoMod MaxRoleMentions Bypass remove": {
                        "Options": "<@user | userid | rolename | @role | #channel>",
                        "Description": "Removes a bypassed user, role or channel"
                    },
                    "AutoMod MaxRoleMentions Bypass clear": {
                        "Options": "",
                        "Description": "Clears the bypass"
                    },
                    "AutoMod MaxRoleMentions <Delete | Warn | Mute | Kick | Ban>": {
                        "Options": "<number of messages>",
                        "Description": "TODO"
                    },
                    "AutoMod MaxRoleMentions Delay": {
                        "Options": "<seconds>",
                        "Description": "TODO"
                    }
                }
            },
            "MaxEmojis": {
                "Type": 0,
                "Description": "View commands for MaxEmojis module",
                "Commands": {
                    "AutoMod MaxEmojis": {
                        "Options": "<true | false>",
                        "Description": "TODO"
                    },
                    "AutoMod MaxEmojis Bypass": {
                        "Options": "<@user | userid | rolename | @role | #channel>",
                        "Description": "Bypasses a user, role or channel"
                    },
                    "AutoMod MaxEmojis Bypass remove": {
                        "Options": "<@user | userid | rolename | @role | #channel>",
                        "Description": "Removes a bypassed user, role or channel"
                    },
                    "AutoMod MaxEmojis Bypass clear": {
                        "Options": "",
                        "Description": "Clears the bypass"
                    },
                    "AutoMod MaxEmojis <Delete | Warn | Mute | Kick | Ban>": {
                        "Options": "<number of messages>",
                        "Description": "TODO"
                    },
                    "AutoMod MaxEmojis Delay": {
                        "Options": "<seconds>",
                        "Description": "TODO"
                    }
                }
            },
            "AntiZalgo": {
                "Type": 0,
                "Description": "View commands for MaxEmojis module",
                "Commands": {
                    "AutoMod AntiZalgo": {
                        "Options": "<true | false>",
                        "Description": "TODO"
                    },
                    "AutoMod AntiZalgo Bypass": {
                        "Options": "<@user | userid | rolename | @role | #channel>",
                        "Description": "Bypasses a user, role or channel"
                    },
                    "AutoMod AntiZalgo Bypass remove": {
                        "Options": "<@user | userid | rolename | @role | #channel>",
                        "Description": "Removes a bypassed user, role or channel"
                    },
                    "AutoMod AntiZalgo Bypass clear": {
                        "Options": "",
                        "Description": "Clears the bypass"
                    },
                    "AutoMod AntiZalgo <Delete | Warn | Mute | Kick | Ban>": {
                        "Options": "<number of messages>",
                        "Description": "TODO"
                    },
                    "AutoMod AntiZalgo Delay": {
                        "Options": "<seconds>",
                        "Description": "TODO"
                    }
                }
            }
        }
    },
    "Filter": {
        "Type": 0,
        "Description": "Displays commands allowing you to filter phrases/invites on your server",
        "Commands": {
            "Filter": {
                "Options": "<true | false>",
                "Description": "Enables/disables the filter module for messages"
            },
            "Filter action": {
                "Options": "<ban / kick / mute / warn>",
                "Description": "The action to perform when the filter detects words/phrases/invites etc"
            },
            "Filter type": {
                "Options": "<invite / ip / word> <true | false>",
                "Description": "Enables/disables a filter"
            },
            "Filter word add": {
                "Options": "<word / phrase>",
                "Description": "Adds words or parses to the word filter (You can multiple by separating them with a |) for example word1|pharse 1|yeet|pharse 2 with more words"
            },
            "Filter word remove": {
                "Options": "<word or phrase>",
                "Description": "Removes words or parses from the word filter (You can multiple by separating them with a |) for example word1|pharse 1|yeet|pharse 2 with more words"
            },
            "Filter bypass": {
                "Options": "<@mention / userid / @role / rolename>",
                "Description": "Bypasses a user or role from the filter"
            },
            "Filter bypass remove": {
                "Options": "<@mention / userid / @role / rolename>",
                "Description": "Removes a bypassed user or role"
            },
            "Filter bypass clear": {
                "Options": "",
                "Description": "Clears the bypass list"
            }
        }
    },
    "Logging": {
        "Type": 0,
        "Description": "Logs ¯\\_(ツ)_/¯",
        "Commands": {
            "Logging set": {
                "Options": "<category> <#channel>",
                "Description": "Sets a channel to log a category\nCategories available:\n- all\n- mod\n- voice\n- message\n- server"
            },
            "Logging override": {
                "Options": "<override> <#channel>",
                "Description": "Overrides a type of log to a channel"
            },
            "Logging override list": {
                "Options": "",
                "Description": "Lists available overrides"
            }
        }
    },
    "Utility": {
        "Type": 0,
        "Description": "Useful commands",
        "Commands": {
            "Utility rolepersist": {
                "Options": "<true | false>",
                "Description": "Enables/disables role persist"
            },
            "Utility rolepersist remove": {
                "Options": "<@user | userid>",
                "Description": "Removes a user's rolepersist"
            },
            "Utility autorole": {
                "Options": "<true | false>",
                "Description": "Enables/disables autorole"
            },
            "Utility autorole add": {
                "Options": "<@role/s | rolename | roleid>",
                "Description": "Adds a role to autorole"
            },
            "Utility autorole remove": {
                "Options": "<@role/s | rolename | roleid>",
                "Description": "Removes a role from autorole"
            },
            "Userinfo": {
                "Options": "<@mention | userid>",
                "Description": "Retrieves info about a user"
            },
            "Inviteinfo": {
                "Options": "<code>",
                "Description": "Retrieves info about an invite"
            },
            "Guildinfo": {
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
        "Type": 0,
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
    }
};
