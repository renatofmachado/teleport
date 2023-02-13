// source: teleport/lib/teleterm/v1/auth_settings.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.teleport.lib.teleterm.v1.AuthProvider', null, global);
goog.exportSymbol('proto.teleport.lib.teleterm.v1.AuthSettings', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.AuthSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.teleport.lib.teleterm.v1.AuthSettings.repeatedFields_, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.AuthSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.AuthSettings.displayName = 'proto.teleport.lib.teleterm.v1.AuthSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.teleport.lib.teleterm.v1.AuthProvider = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.teleport.lib.teleterm.v1.AuthProvider, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.teleport.lib.teleterm.v1.AuthProvider.displayName = 'proto.teleport.lib.teleterm.v1.AuthProvider';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.teleport.lib.teleterm.v1.AuthSettings.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.AuthSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.AuthSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.AuthSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    localAuthEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    secondFactor: jspb.Message.getFieldWithDefault(msg, 2, ""),
    preferredMfa: jspb.Message.getFieldWithDefault(msg, 3, ""),
    authProvidersList: jspb.Message.toObjectList(msg.getAuthProvidersList(),
    proto.teleport.lib.teleterm.v1.AuthProvider.toObject, includeInstance),
    hasMessageOfTheDay: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    authType: jspb.Message.getFieldWithDefault(msg, 6, ""),
    allowPasswordless: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    localConnectorName: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.AuthSettings}
 */
proto.teleport.lib.teleterm.v1.AuthSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.AuthSettings;
  return proto.teleport.lib.teleterm.v1.AuthSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.AuthSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.AuthSettings}
 */
proto.teleport.lib.teleterm.v1.AuthSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLocalAuthEnabled(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecondFactor(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreferredMfa(value);
      break;
    case 4:
      var value = new proto.teleport.lib.teleterm.v1.AuthProvider;
      reader.readMessage(value,proto.teleport.lib.teleterm.v1.AuthProvider.deserializeBinaryFromReader);
      msg.addAuthProviders(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasMessageOfTheDay(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthType(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowPasswordless(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalConnectorName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.AuthSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.AuthSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.AuthSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocalAuthEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSecondFactor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPreferredMfa();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAuthProvidersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.teleport.lib.teleterm.v1.AuthProvider.serializeBinaryToWriter
    );
  }
  f = message.getHasMessageOfTheDay();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getAuthType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAllowPasswordless();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getLocalConnectorName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional bool local_auth_enabled = 1;
 * @return {boolean}
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.getLocalAuthEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.teleport.lib.teleterm.v1.AuthSettings} returns this
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.setLocalAuthEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string second_factor = 2;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.getSecondFactor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.AuthSettings} returns this
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.setSecondFactor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string preferred_mfa = 3;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.getPreferredMfa = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.AuthSettings} returns this
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.setPreferredMfa = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated AuthProvider auth_providers = 4;
 * @return {!Array<!proto.teleport.lib.teleterm.v1.AuthProvider>}
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.getAuthProvidersList = function() {
  return /** @type{!Array<!proto.teleport.lib.teleterm.v1.AuthProvider>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.teleport.lib.teleterm.v1.AuthProvider, 4));
};


/**
 * @param {!Array<!proto.teleport.lib.teleterm.v1.AuthProvider>} value
 * @return {!proto.teleport.lib.teleterm.v1.AuthSettings} returns this
*/
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.setAuthProvidersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.teleport.lib.teleterm.v1.AuthProvider=} opt_value
 * @param {number=} opt_index
 * @return {!proto.teleport.lib.teleterm.v1.AuthProvider}
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.addAuthProviders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.teleport.lib.teleterm.v1.AuthProvider, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.teleport.lib.teleterm.v1.AuthSettings} returns this
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.clearAuthProvidersList = function() {
  return this.setAuthProvidersList([]);
};


/**
 * optional bool has_message_of_the_day = 5;
 * @return {boolean}
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.getHasMessageOfTheDay = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.teleport.lib.teleterm.v1.AuthSettings} returns this
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.setHasMessageOfTheDay = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string auth_type = 6;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.getAuthType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.AuthSettings} returns this
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.setAuthType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool allow_passwordless = 7;
 * @return {boolean}
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.getAllowPasswordless = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.teleport.lib.teleterm.v1.AuthSettings} returns this
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.setAllowPasswordless = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string local_connector_name = 8;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.getLocalConnectorName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.AuthSettings} returns this
 */
proto.teleport.lib.teleterm.v1.AuthSettings.prototype.setLocalConnectorName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.teleport.lib.teleterm.v1.AuthProvider.prototype.toObject = function(opt_includeInstance) {
  return proto.teleport.lib.teleterm.v1.AuthProvider.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.teleport.lib.teleterm.v1.AuthProvider} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.AuthProvider.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.teleport.lib.teleterm.v1.AuthProvider}
 */
proto.teleport.lib.teleterm.v1.AuthProvider.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.teleport.lib.teleterm.v1.AuthProvider;
  return proto.teleport.lib.teleterm.v1.AuthProvider.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.teleport.lib.teleterm.v1.AuthProvider} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.teleport.lib.teleterm.v1.AuthProvider}
 */
proto.teleport.lib.teleterm.v1.AuthProvider.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.teleport.lib.teleterm.v1.AuthProvider.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.teleport.lib.teleterm.v1.AuthProvider.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.teleport.lib.teleterm.v1.AuthProvider} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.teleport.lib.teleterm.v1.AuthProvider.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.AuthProvider.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.AuthProvider} returns this
 */
proto.teleport.lib.teleterm.v1.AuthProvider.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.AuthProvider.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.AuthProvider} returns this
 */
proto.teleport.lib.teleterm.v1.AuthProvider.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string display_name = 3;
 * @return {string}
 */
proto.teleport.lib.teleterm.v1.AuthProvider.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.teleport.lib.teleterm.v1.AuthProvider} returns this
 */
proto.teleport.lib.teleterm.v1.AuthProvider.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.teleport.lib.teleterm.v1);