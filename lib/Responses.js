module.exports.EnableOptions    = ["true", "on", "enable", "yep", "ye", "yeah", "yes", "y", "t", "1"];
module.exports.DisableOptions   = ["false", "off", "disable", "nope", "na", "nah", "no", "n", "f", "0"];

module.exports.Owner                =               `𝓜𝓸𝓽𝓸#0306 \nThanks to GRIMM_\\_\\_\\_#6413 for ideas, logo & hosting the bot!`;
module.exports.Cooldown_Message     =               `Calm Down! 3 seconds remaining! The timer wont reset until you STAP!`;
module.exports.CantFindMember       =               `Sorry I Can't Find That Member`;
module.exports.Success              =               `✅ | Success!`;
module.exports.ErrorOccured         =               `A Error Occurred!`;
module.exports.NotAModOrHigher      =               `You are not a mod or higher!`;
module.exports.CantFindThatUser     =               `Sorry I Can't Find That Member!`;

// Roles
module.exports.CantFindRole         =               `We could not find that role`;
module.exports.DupeRole             =               `Duplicate Role`;
module.exports.RemoveFail           =               `Role Removal Failed`;
module.exports.RoleDoesntExsist     =               `Role Doesn't Exist`;
module.exports.Removed              =               `Role removed`;
module.exports.Added                =               `Role Added`;
module.exports.AddedFail            =               `Role Addition Failed`;
module.exports.RolesAdded           =               `The role or roles have been added`;

// Logging
let Logging = {};
Logging.MissingPermission           =               `❌ | Im Missing Permissions in the Log Channel! \nIf this is a bug please report it by typing '&support'`;
Logging.MissingAccess               =               `❌ | Im Missing Access in the Log Channel! \nIf this is a bug please report it by typing '&support'`;
module.exports.Logging = Logging;

module.exports.Requested_By         = (user) =>     `Requested By: ${user.username}`;

// Permissions
let Permissions = {};
Permissions.administrator           =               `You require 'administrator' permission`;
Permissions.NotEnoughPermsAdd       =               `I do not have enough permissions to add the role to that user!`;
Permissions.NotEnoughPermsRemove    =               `I do not have enough permissions to remove the role!`;
module.exports.Permissions = Permissions;

// Link
let Link = {};
Link.GlobalBlacklist                =               `Link On Global Blacklist`;
Link.MaliciousLink                  =               `Posting a Malicious link`;
Link.ModOrHigher                    =               `You are not a mod or higher!`;
module.exports.Link = Link;

// Warn
let Warn = {};
Warn.DMMessage                      =                `❌ | You have been warned!`;
Warn.NoReason                       =                `___**No reason specified!**___`;
Warn.Removed                        = (id) =>        `Warn #${id} has been removed!`;
Warn.NoWarnsFound                   =                `No warns were found for this user!`;
Warn.WrongPerms                     =                `You have incorrect perms to look at other peoples warns!`;
module.exports.Warn = Warn;

// Muted
let Muted = {};
Muted.notMuted                      =                `That user is not muted!`;
module.exports.Muted = Muted;

// Purge
let Purge = {};
Purge.DeletedMessages               = (num) =>      `Deleted ${num} messages!`;
module.exports.Purge = Purge;

// Prefix
let Prefix = {};
Prefix.changed                      = (prefix) =>   `Prefix Changed to: ${prefix}`;
Prefix.notChanged                   =               `Prefix did not change`;
module.exports.Prefix = Prefix;
