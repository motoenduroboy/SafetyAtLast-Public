/*
ONLY EDIT THE Description AND THE Options OTHERWISE IT WILL BREAK THE BOT
*/

module.exports = {
  "Link": {
    "Description": "Shows all the commands for customizing what links get deleted in your server",
    "Commands": {
      "Link": {
        "Options": "<true / false>",
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
        "Options": "<true / false>",
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
        "Options": "<true / false>",
        "Description": "Enables/disables autowarn for link scanning"
      },
      "Link automute": {
        "Options": "<true / false>",
        "Description": "Enables/disables automute for link scanning"
      },
      "Link reactions": {
        "Options": "<true / false>",
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
      "Permissions removeadmin": {
        "Options": "<@role | rolename | roleid>",
        "Description": "Removes a role from admin"
      },
      "Permissions addadmin": {
        "Options": "<@role | rolename | roleid>",
        "Description": "Adds a role to admin"
      },
      "Permissions removemod": {
        "Options": "<@role | rolename | roleid>",
        "Description": "Removes a role from mod"
      },
      "Permissions addmod": {
        "Options": "<@role | rolename | roleid>",
        "Description": "Adds a role to mod"
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
        "Options": "<userid>",
        "Description": "Bans a user who is not on the server"
      }
    }
  },
  "DBans": {
    "Description": "Shows the settings allowing you to customize what happens to users on bans.discordlist.net",
    "Commands": {
      "DBans": {
        "Options": "<true / false>",
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
  "Filter": {
    "Description": "Commands allowing you to filter phrases/invites on your server",
    "Commands": {
      "Filter": {
        "Options": "<true / false>",
        "Description": "Enables/disables the filter module"
      },
      "Filter action": {
        "Options": "<ban / kick / mute / warn>",
        "Description": "The action to perform when the filter detects words/phrases/invites etc"
      },
      "Filter type": {
        "Options": "<invite / ip / word> <true / false>",
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
  "Utility": {
    "Description": "Stuff that is useful.",
    "Commands": {
      "Utility rolepersist": {
        "Options": "<true | false>",
        "Description": "Enables/disables role persist"
      },
      "Utility setlogchannel": {
        "Options": "<#channel>",
        "Description": "Sets the logging channel"
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
}
