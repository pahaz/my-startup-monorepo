// auto generated by kmigrator
// KMIGRATOR:0017_auto_20200627_1032:IyBHZW5lcmF0ZWQgYnkgRGphbmdvIDMuMC42IG9uIDIwMjAtMDYtMjcgMTA6MzIKCmZyb20gZGphbmdvLmRiIGltcG9ydCBtaWdyYXRpb25zLCBtb2RlbHMKaW1wb3J0IGRqYW5nby5kYi5tb2RlbHMuZGVsZXRpb24KCgpjbGFzcyBNaWdyYXRpb24obWlncmF0aW9ucy5NaWdyYXRpb24pOgoKICAgIGRlcGVuZGVuY2llcyA9IFsKICAgICAgICAoJ19kamFuZ29fc2NoZW1hJywgJzAwMTZfYXV0b18yMDIwMDYyN18xMDAyJyksCiAgICBdCgogICAgb3BlcmF0aW9ucyA9IFsKICAgICAgICBtaWdyYXRpb25zLkFsdGVyRmllbGQoCiAgICAgICAgICAgIG1vZGVsX25hbWU9J2ZvcmdvdHBhc3N3b3JkYWN0aW9uJywKICAgICAgICAgICAgbmFtZT0ndXNlcicsCiAgICAgICAgICAgIGZpZWxkPW1vZGVscy5Gb3JlaWduS2V5KGJsYW5rPVRydWUsIGRiX2NvbHVtbj0ndXNlcicsIG51bGw9VHJ1ZSwgb25fZGVsZXRlPWRqYW5nby5kYi5tb2RlbHMuZGVsZXRpb24uRE9fTk9USElORywgcmVsYXRlZF9uYW1lPScrJywgdG89J19kamFuZ29fc2NoZW1hLnVzZXInKSwKICAgICAgICApLAogICAgXQo=

exports.up = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Alter field user on forgotpasswordaction
--
SET CONSTRAINTS "ForgotPasswordAction_user_3c52ec86_fk_User_id" IMMEDIATE; ALTER TABLE "ForgotPasswordAction" DROP CONSTRAINT "ForgotPasswordAction_user_3c52ec86_fk_User_id";
ALTER TABLE "ForgotPasswordAction" ALTER COLUMN "user" DROP NOT NULL;
ALTER TABLE "ForgotPasswordAction" ADD CONSTRAINT "ForgotPasswordAction_user_3c52ec86_fk_User_id" FOREIGN KEY ("user") REFERENCES "User" ("id") DEFERRABLE INITIALLY DEFERRED;
COMMIT;

    `)
}

exports.down = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Alter field user on forgotpasswordaction
--
SET CONSTRAINTS "ForgotPasswordAction_user_3c52ec86_fk_User_id" IMMEDIATE; ALTER TABLE "ForgotPasswordAction" DROP CONSTRAINT "ForgotPasswordAction_user_3c52ec86_fk_User_id";
ALTER TABLE "ForgotPasswordAction" ALTER COLUMN "user" SET NOT NULL;
ALTER TABLE "ForgotPasswordAction" ADD CONSTRAINT "ForgotPasswordAction_user_3c52ec86_fk_User_id" FOREIGN KEY ("user") REFERENCES "User" ("id") DEFERRABLE INITIALLY DEFERRED;
COMMIT;

    `)
}
