// auto generated by kmigrator
// KMIGRATOR:0040_auto_20201114_1519:IyBHZW5lcmF0ZWQgYnkgRGphbmdvIDMuMS4yIG9uIDIwMjAtMTEtMTQgMTU6MTkKCmZyb20gZGphbmdvLmRiIGltcG9ydCBtaWdyYXRpb25zLCBtb2RlbHMKCgpjbGFzcyBNaWdyYXRpb24obWlncmF0aW9ucy5NaWdyYXRpb24pOgoKICAgIGRlcGVuZGVuY2llcyA9IFsKICAgICAgICAoJ19kamFuZ29fc2NoZW1hJywgJzAwMzlfYXV0b18yMDIwMTExNF8xNDA4JyksCiAgICBdCgogICAgb3BlcmF0aW9ucyA9IFsKICAgICAgICBtaWdyYXRpb25zLkFsdGVyRmllbGQoCiAgICAgICAgICAgIG1vZGVsX25hbWU9J3Rlc3RoaXN0b3J5cmVjb3JkJywKICAgICAgICAgICAgbmFtZT0naGlzdG9yeV9pZCcsCiAgICAgICAgICAgIGZpZWxkPW1vZGVscy5Qb3NpdGl2ZUludGVnZXJGaWVsZChkYl9pbmRleD1UcnVlKSwKICAgICAgICApLAogICAgICAgIG1pZ3JhdGlvbnMuQWx0ZXJGaWVsZCgKICAgICAgICAgICAgbW9kZWxfbmFtZT0ndGVzdGl0ZW1oaXN0b3J5cmVjb3JkJywKICAgICAgICAgICAgbmFtZT0naGlzdG9yeV9pZCcsCiAgICAgICAgICAgIGZpZWxkPW1vZGVscy5VVUlERmllbGQoZGJfaW5kZXg9VHJ1ZSksCiAgICAgICAgKSwKICAgICAgICBtaWdyYXRpb25zLkFsdGVyRmllbGQoCiAgICAgICAgICAgIG1vZGVsX25hbWU9J3Rlc3Rzb2Z0ZGVsZXRlZG9iamhpc3RvcnlyZWNvcmQnLAogICAgICAgICAgICBuYW1lPSdoaXN0b3J5X2lkJywKICAgICAgICAgICAgZmllbGQ9bW9kZWxzLlBvc2l0aXZlSW50ZWdlckZpZWxkKGRiX2luZGV4PVRydWUpLAogICAgICAgICksCiAgICBdCg==

exports.up = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Alter field history_id on testhistoryrecord
--
CREATE INDEX "TestHistoryRecord_history_id_9e99b381" ON "TestHistoryRecord" ("history_id");
--
-- Alter field history_id on testitemhistoryrecord
--
CREATE INDEX "TestItemHistoryRecord_history_id_3e2881da" ON "TestItemHistoryRecord" ("history_id");
--
-- Alter field history_id on testsoftdeletedobjhistoryrecord
--
CREATE INDEX "TestSoftDeletedObjHistoryRecord_history_id_07d9171f" ON "TestSoftDeletedObjHistoryRecord" ("history_id");
COMMIT;

    `)
}

exports.down = async (knex) => {
    await knex.raw(`
    BEGIN;
--
-- Alter field history_id on testsoftdeletedobjhistoryrecord
--
--
-- Alter field history_id on testitemhistoryrecord
--
--
-- Alter field history_id on testhistoryrecord
--
COMMIT;

    `)
}
