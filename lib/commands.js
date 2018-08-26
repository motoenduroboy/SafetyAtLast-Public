/*
ONLY EDIT THE Description AND THE Options OTHERWISE IT WILL BREAK THE BOT
*/

module.exports = {
    "Link": {
        "Description": "Shows all the commands for customizing what links get deleted in your server",
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
                "Description": "Bypasses a user or role"
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
            "Permissions presets": {
                "Options": "<preset> <@role | roleid>",
                "Description": "Lists presets and lists presets permissions and gives a role those permissions"
            },
            "Permissions list": {
                "Options": "",
                "Description": "Lists all roles"
            },
            "Permissions list roles": {
                "Options": "<@role | name>",
                "Description": "Lists permissions for a role"
            }
        }
    },
    "Warn": {
        "Description": "Displays the settings associated with how many warns a user can get and what actions to perform when a user gets so many",
        "Commands": {
            "Warn": {
                "Options": "<@user/s | userid> <reason>",
                "Description": "Warns a user"
            },
            "Warn clear": {
                "Options": "<warnid>",
                "Description": "Removes a warn"
            },
            "Warn clear all": {
                "Options": "<@user | userid>",
                "Description": "Removes a warn"
            },
            "Warn limit kick": {
                "Options": "<warns>",
                "Description": "Disable or Enabled autokick (0 disables)"
            },
            "Warn limit ban": {
                "Options": "<warns>",
                "Description": "Disable or Enabled autoban (0 disables)"
            }
        }
    },
    "Mute": {
        "Description": "Presents all the mute settings and commands",
        "Commands": {
            "Mute": {
                "Options": "<@user/s | userid> <minutes>",
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
                "Description": "Removes a warn"
            },
            "Warn clear all": {
                "Options": "<@user | userid>",
                "Description": "Removes a warn"
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
                "Description": "Ban a user"
            },
            "Unban": {
                "Options": "<userid>",
                "Description": "Unban a user"
            },
            "Hackban": {
                "Options": "<userid> <reason>",
                "Description": "Bans a user who is not on the server"
            }
        }
    },
    "DBans": {
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
                "Description": "Scans the whole server and performs the action specified"
            },
            "DBans bypass": {
                "Options": "<@mention / userid / @role / rolename>",
                "Description": "Bypasses a user or role"
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
    },
    "AutoMod": {
        "Description": "TODO",
        "Commands": {
            "AutoMod AntiDupe": {
                "Options": "<true | false>",
                "Description": "Enables/disables the anti dupe module"
            },
            "AutoMod AntiDupe Delay": {
                "Options": "<seconds>",
                "Description": "The minimum amount of time before someone can send the same message. 100 seconds max"
            },
            "AutoMod AntiDupe <Delete | Warn | Mute | Kick | Ban>": {
                "Options": "<number of messages>",
                "Description": "How many of the same messages can be sent before they are deleted"
            },
            "AutoMod AntiSpam": {
                "Options": "<true | false>",
                "Description": "Enables/disables the anti spam module"
            },
            "AutoMod AntiSpam Delay": {
                "Options": "<seconds>",
                "Description": "TODO"
            },
            "AutoMod AntiSpam <Delete | Warn | Mute | Kick | Ban>": {
                "Options": "<number of messages>",
                "Description": "TODO"
            },
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
            "AutoMod MaxRoleMentions": {
                "Options": "<true | false>",
                "Description": "TODO"
            },
            "AutoMod MaxRoleMentions <Delete | Warn | Mute | Kick | Ban>": {
                "Options": "<number of messages>",
                "Description": "TODO"
            },
            "AutoMod MaxRoleMentions Delay": {
                "Options": "<seconds>",
                "Description": "TODO"
            },
            "AutoMod MaxEmojis": {
                "Options": "<true | false>",
                "Description": "TODO"
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
    "Filter": {
        "Description": "Commands allowing you to filter phrases/invites on your server",
        "Commands": {
            "Filter": {
                "Options": "<true | false>",
                "Description": "Enables/disables the filter module"
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
                "Description": "Bypasses a user or role"
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
        "Description": "Stuff that is useful.",
        "Commands": {
            "Utility rolepersist": {
                "Options": "<true | false>",
                "Description": "Enables/disables role persist"
            },
            "Utility rolepersist remove": {
                "Options": "<@user | userid>",
                "Description": "Clears a user"
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
                "Description": "Removes a role to autorole"
            },
            "Userinfo": {
                "Options": "<@mention | userid>",
                "Description": "Retrieves info about a user"
            },
            "Inviteinfo": {
                "Options": "<code>",
                "Description": "Retrieves info about a user"
            },
            "guildinfo": {
                "Options": "",
                "Description": "Retrieves info about a user"
            },
            "Prefix": {
                "Options": "<Prefix>",
                "Description": "Sets the prefix for the bot"
            }
        }
    },
    "Other": {
        "Description": "Stuff like invite and support commands",
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