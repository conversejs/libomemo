/* vim: ts=4:sw=4 */

// eslint-disable-next-line no-redeclare
var Internal = Internal || {};

Internal.protobuf = (function() {
    'use strict';

    function loadProtoBufs(filename) {
        return dcodeIO.ProtoBuf.loadProto(Internal.protoText['protos/' + filename]).build('textsecure');
    }

    const protocolMessages = loadProtoBufs('WhisperTextProtocol.proto');

    return {
        WhisperMessage            : protocolMessages.WhisperMessage,
        PreKeyWhisperMessage      : protocolMessages.PreKeyWhisperMessage
    };
}());
