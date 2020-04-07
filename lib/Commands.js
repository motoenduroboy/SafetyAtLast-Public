/*
ONLY EDIT THE Description AND THE Options OTHERWISE IT WILL BREAK THE BOT
*/

module.exports = {
    "Link": {
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
        "Description": "Displays the settings associated with how many warnings a user can get and what actions to perform when a user gets so many",
        "Commands": {
            "Warn": {
                "Options": "<@user/s | userid> <reason>",
                "Description": "Warns a user"
            },
            "Warn list": {
                "Options": "<@user/s | userid>",
                "Description": "Lists all warns for a user"
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
        "Description": "Presents all moderation commands",
        "Commands": {
            "Purge": {
                "Options": "<amount> <all | @user | word>",
                "Description": "Purges the channel"
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
            "Ban Clean": {
                "Options": "",
                "Description": "Removes Deleted Users from bans"
            },
            "Unban": {
                "Options": "<userid>",
                "Description": "Unbans a user"
            },
            "Hackban": {
                "Options": "<userid> <reason>",
                "Description": "Bans a user who is not on the server"
            },
            "<Kick | Ban | UnBan | HackBan> Limit": {
                "Options": "<true | false>",
                "Description": "Enables <Kick | Ban | UnBan | HackBan> limits for moderators"
            },
            "<Kick | Ban | UnBan | HackBan> Limit Delay": {
                "Options": "<delay>",
                "Description": "Sets the delay before moderators limits reset"
            },
            "<Kick | Ban | UnBan | HackBan> Limit Add": {
                "Options": "<@role/s | roleID> <limit>",
                "Description": "Adds a limit for a role"
            },
            "<Kick | Ban | UnBan | HackBan> Limit Remove": {
                "Options": "<@role/s | roleID>",
                "Description": "Removes a limit for a role"
            }
        }
    },
    /*"DBans": {
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
        "Description": "Presents all the automod commands",
        "Commands": {
            "AutoMod Setup": {
                "Options": "",
                "Description": "Sets up automod with default settings"
            }
        },
        "Categories": {
            "AntiDupe": {
                "Description": "View commands for AntiDupe module",
                "Commands": {
                    "AutoMod AntiDupe": {
                        "Options": "<true | false>",
                        "Description": "Enables or disables the antidupe module"
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
                "Description": "View commands for AntiSpam module",
                "Commands": {
                    "AutoMod AntiSpam": {
                        "Options": "<true | false>",
                        "Description": "Enables or disables the antispam module"
                    },
                    "AutoMod AntiSpam Delay": {
                        "Options": "<seconds>",
                        "Description": "The minimum amount of time before someone can send another message. 100 seconds max"
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
                        "Description": "Perform the action at a certain amount of messages"
                    }
                }
            },
            "AntiJoinSpam": {
                "Description": "View commands for AntiJoinSpam module",
                "Commands": {
                    "AutoMod AntiJoinSpam": {
                        "Options": "<true | false>",
                        "Description": "Enables or disables the antijoinspam module"
                    },
                    "AutoMod AntiJoinSpam Delay": {
                        "Options": "<seconds>",
                        "Description": "The minimum amount of time before someone can join the server again. 100 seconds max"
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
                        "Description": "Bans the user when they get x amount of joins"
                    }
                }
            },
            "MaxMentions": {
                "Description": "View commands for MaxMentions module",
                "Commands": {
                    "AutoMod MaxMentions": {
                        "Options": "<true | false>",
                        "Description": "Enable or Disable the maxmentions module"
                    },
                    "AutoMod MaxMentions <Delete | Warn | Mute | Kick | Ban>": {
                        "Options": "<messages>",
                        "Description": "The action to perform when you send to many mentions"
                    },
                    "AutoMod MaxMentions Delay": {
                        "Options": "<seconds>",
                        "Description": "The minimum amount of time before someone can send more mentions"
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
                "Description": "View commands for MaxRoleMentions module",
                "Commands": {
                    "AutoMod MaxRoleMentions": {
                        "Options": "<true | false>",
                        "Description": "Enable or Disable the maxrolementions module"
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
                        "Description": "The action to perform when someone send to many role mentions"
                    },
                    "AutoMod MaxRoleMentions Delay": {
                        "Options": "<seconds>",
                        "Description": "The minimum amount of time before someone can mention another role"
                    }
                }
            },
            "MaxEmojis": {
                "Description": "View commands for MaxEmojis module",
                "Commands": {
                    "AutoMod MaxEmojis": {
                        "Options": "<true | false>",
                        "Description": "Enable or Disable the MaxEmojis module"
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
                        "Description": "The action to perform when someone sends x amount of emojis"
                    },
                    "AutoMod MaxEmojis Delay": {
                        "Options": "<seconds>",
                        "Description": "The minimum amount of time before someone can send another emoji"
                    }
                }
            },
            "AntiZalgo": {
                "Description": "View commands for MaxZalgo module",
                "Commands": {
                    "AutoMod AntiZalgo": {
                        "Options": "<true | false>",
                        "Description": "Enable or Disable the AntiZalgo module"
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
                        "Description": "The action to perform when someone sends to many zalgo messages"
                    },
                    "AutoMod AntiZalgo Delay": {
                        "Options": "<seconds>",
                        "Description": "The minimum amount of time before someone can send another message containing zalgo"
                    }
                }
            }
        }
    },
    "EventMessages": {
        "Description": "Presents all the eventmessages commands\nVariables:\n`username` `discriminator` `mention` `servername` `channelmention` `channelname`",
        "Categories": {
            "Welcome": {
                "Description": "View commands for Welcome module\nSpecific Variables:\n`invite` `inviter` `invitermention`",
                "Commands": {
                    "EventMessages Welcome": {
                        "Options": "<#channel | false>",
                        "Description": "Sets the channel for the message"
                    },
                    "EventMessages Welcome Message": {
                        "Options": "<message>",
                        "Description": "Sets the message"
                    },
                    "EventMessages Welcome Test": {
                        "Options": "",
                        "Description": "Print a test version of your message"
                    }
                }
            },
            "Goodbye": {
                "Description": "View commands for Goodbye module",
                "Commands": {
                    "EventMessages Goodbye": {
                        "Options": "<#channel | false>",
                        "Description": "Sets the channel for the message"
                    },
                    "EventMessages Goodbye Message": {
                        "Options": "<message>",
                        "Description": "Sets the message"
                    },
                    "EventMessages Goodbye Test": {
                        "Options": "",
                        "Description": "Print a test version of your message"
                    }
                }
            },
            "Kick": {
                "Description": "View commands for Kick module\nSpecific Variables:\n`reason`",
                "Commands": {
                    "EventMessages Kick": {
                        "Options": "<#channel | false>",
                        "Description": "Sets the channel for the message"
                    },
                    "EventMessages Kick Message": {
                        "Options": "<message>",
                        "Description": "Sets the message"
                    },
                    "EventMessages Kick Test": {
                        "Options": "",
                        "Description": "Print a test version of your message"
                    }
                }
            },
            "Ban": {
                "Description": "View commands for Ban module\nSpecific Variables:\n`reason`",
                "Commands": {
                    "EventMessages Ban": {
                        "Options": "<#channel | false>",
                        "Description": "Sets the channel for the message"
                    },
                    "EventMessages Ban Message": {
                        "Options": "<message>",
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
