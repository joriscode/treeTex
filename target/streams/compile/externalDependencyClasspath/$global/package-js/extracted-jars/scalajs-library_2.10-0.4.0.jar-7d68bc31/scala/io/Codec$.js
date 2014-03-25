/** @constructor */
ScalaJS.c.scala_io_Codec$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.ISO8859$1 = null;
  this.UTF8$1 = null
});
ScalaJS.c.scala_io_Codec$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_io_Codec$.prototype.constructor = ScalaJS.c.scala_io_Codec$;
ScalaJS.c.scala_io_Codec$.prototype.fallbackSystemCodec__Lscala_io_Codec = (function() {
  return ScalaJS.impls.scala_io_LowPriorityCodecImplicits$class__fallbackSystemCodec__Lscala_io_Codec$__Lscala_io_Codec(this)
});
ScalaJS.c.scala_io_Codec$.prototype.ISO8859__Lscala_io_Codec = (function() {
  return this.ISO8859$1
});
ScalaJS.c.scala_io_Codec$.prototype.UTF8__Lscala_io_Codec = (function() {
  return this.UTF8$1
});
ScalaJS.c.scala_io_Codec$.prototype.defaultCharsetCodec__Lscala_io_Codec = (function() {
  return this.apply__Ljava_nio_charset_Charset__Lscala_io_Codec(ScalaJS.modules.java_nio_charset_Charset().defaultCharset__Ljava_nio_charset_Charset())
});
ScalaJS.c.scala_io_Codec$.prototype.fileEncodingCodec__Lscala_io_Codec = (function() {
  return this.apply__T__Lscala_io_Codec(ScalaJS.modules.scala_util_Properties().encodingString__T())
});
ScalaJS.c.scala_io_Codec$.prototype.$default__Lscala_io_Codec = (function() {
  return this.defaultCharsetCodec__Lscala_io_Codec()
});
ScalaJS.c.scala_io_Codec$.prototype.apply__T__Lscala_io_Codec = (function(encoding) {
  return new ScalaJS.c.scala_io_Codec().init___Ljava_nio_charset_Charset(ScalaJS.modules.java_nio_charset_Charset().forName__T__Ljava_nio_charset_Charset(encoding))
});
ScalaJS.c.scala_io_Codec$.prototype.apply__Ljava_nio_charset_Charset__Lscala_io_Codec = (function(charSet) {
  return new ScalaJS.c.scala_io_Codec().init___Ljava_nio_charset_Charset(charSet)
});
ScalaJS.c.scala_io_Codec$.prototype.apply__Ljava_nio_charset_CharsetDecoder__Lscala_io_Codec = (function(decoder) {
  var _decoder = decoder;
  return new ScalaJS.c.scala_io_Codec$$anon$1().init___Ljava_nio_charset_CharsetDecoder__Ljava_nio_charset_CharsetDecoder(decoder, _decoder)
});
ScalaJS.c.scala_io_Codec$.prototype.fromUTF8__AB__AC = (function(bytes) {
  return this.fromUTF8__AB__I__I__AC(bytes, 0, bytes.underlying.length)
});
ScalaJS.c.scala_io_Codec$.prototype.fromUTF8__AB__I__I__AC = (function(bytes, offset, len) {
  var bbuffer = ScalaJS.modules.java_nio_ByteBuffer().wrap__AB__I__I__Ljava_nio_ByteBuffer(bytes, offset, len);
  var cbuffer = this.UTF8__Lscala_io_Codec().charSet__Ljava_nio_charset_Charset().decode__Ljava_nio_ByteBuffer__Ljava_nio_CharBuffer(bbuffer);
  var chars = ScalaJS.newArrayObject(ScalaJS.data.scala_Char.getArrayOf(), [cbuffer.remaining__I()]);
  cbuffer.get__AC__Ljava_nio_CharBuffer(chars);
  return chars
});
ScalaJS.c.scala_io_Codec$.prototype.toUTF8__Ljava_lang_CharSequence__AB = (function(cs) {
  var cbuffer = ScalaJS.modules.java_nio_CharBuffer().wrap__Ljava_lang_CharSequence__I__I__Ljava_nio_CharBuffer(cs, 0, ScalaJS.charSequenceLength(cs));
  var bbuffer = this.UTF8__Lscala_io_Codec().charSet__Ljava_nio_charset_Charset().encode__Ljava_nio_CharBuffer__Ljava_nio_ByteBuffer(cbuffer);
  var bytes = ScalaJS.newArrayObject(ScalaJS.data.scala_Byte.getArrayOf(), [bbuffer.remaining__I()]);
  bbuffer.get__AB__Ljava_nio_ByteBuffer(bytes);
  return bytes
});
ScalaJS.c.scala_io_Codec$.prototype.toUTF8__AC__I__I__AB = (function(chars, offset, len) {
  var cbuffer = ScalaJS.modules.java_nio_CharBuffer().wrap__AC__I__I__Ljava_nio_CharBuffer(chars, offset, len);
  var bbuffer = this.UTF8__Lscala_io_Codec().charSet__Ljava_nio_charset_Charset().encode__Ljava_nio_CharBuffer__Ljava_nio_ByteBuffer(cbuffer);
  var bytes = ScalaJS.newArrayObject(ScalaJS.data.scala_Byte.getArrayOf(), [bbuffer.remaining__I()]);
  bbuffer.get__AB__Ljava_nio_ByteBuffer(bytes);
  return bytes
});
ScalaJS.c.scala_io_Codec$.prototype.string2codec__T__Lscala_io_Codec = (function(s) {
  return this.apply__T__Lscala_io_Codec(s)
});
ScalaJS.c.scala_io_Codec$.prototype.charset2codec__Ljava_nio_charset_Charset__Lscala_io_Codec = (function(c) {
  return this.apply__Ljava_nio_charset_Charset__Lscala_io_Codec(c)
});
ScalaJS.c.scala_io_Codec$.prototype.decoder2codec__Ljava_nio_charset_CharsetDecoder__Lscala_io_Codec = (function(cd) {
  return this.apply__Ljava_nio_charset_CharsetDecoder__Lscala_io_Codec(cd)
});
ScalaJS.c.scala_io_Codec$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_io_Codec = this;
  ScalaJS.impls.scala_io_LowPriorityCodecImplicits$class__$init$__Lscala_io_Codec$__V(this);
  this.ISO8859$1 = new ScalaJS.c.scala_io_Codec().init___Ljava_nio_charset_Charset(ScalaJS.modules.java_nio_charset_Charset().forName__T__Ljava_nio_charset_Charset("ISO-8859-1"));
  this.UTF8$1 = new ScalaJS.c.scala_io_Codec().init___Ljava_nio_charset_Charset(ScalaJS.modules.java_nio_charset_Charset().forName__T__Ljava_nio_charset_Charset("UTF-8"));
  return this
});
ScalaJS.c.scala_io_Codec$.prototype.fallbackSystemCodec__ = (function() {
  return this.fallbackSystemCodec__Lscala_io_Codec()
});
ScalaJS.c.scala_io_Codec$.prototype.decoder2codec__Ljava_nio_charset_CharsetDecoder__ = (function(cd) {
  return this.decoder2codec__Ljava_nio_charset_CharsetDecoder__Lscala_io_Codec(cd)
});
ScalaJS.c.scala_io_Codec$.prototype.charset2codec__Ljava_nio_charset_Charset__ = (function(c) {
  return this.charset2codec__Ljava_nio_charset_Charset__Lscala_io_Codec(c)
});
ScalaJS.c.scala_io_Codec$.prototype.string2codec__T__ = (function(s) {
  return this.string2codec__T__Lscala_io_Codec(s)
});
ScalaJS.c.scala_io_Codec$.prototype.toUTF8__AC__I__I__ = (function(chars, offset, len) {
  return this.toUTF8__AC__I__I__AB(chars, offset, len)
});
ScalaJS.c.scala_io_Codec$.prototype.toUTF8__Ljava_lang_CharSequence__ = (function(cs) {
  return this.toUTF8__Ljava_lang_CharSequence__AB(cs)
});
ScalaJS.c.scala_io_Codec$.prototype.fromUTF8__AB__I__I__ = (function(bytes, offset$2, len$2) {
  return this.fromUTF8__AB__I__I__AC(bytes, offset$2, len$2)
});
ScalaJS.c.scala_io_Codec$.prototype.fromUTF8__AB__ = (function(bytes$2) {
  return this.fromUTF8__AB__AC(bytes$2)
});
ScalaJS.c.scala_io_Codec$.prototype.apply__Ljava_nio_charset_CharsetDecoder__ = (function(decoder) {
  return this.apply__Ljava_nio_charset_CharsetDecoder__Lscala_io_Codec(decoder)
});
ScalaJS.c.scala_io_Codec$.prototype.apply__Ljava_nio_charset_Charset__ = (function(charSet) {
  return this.apply__Ljava_nio_charset_Charset__Lscala_io_Codec(charSet)
});
ScalaJS.c.scala_io_Codec$.prototype.apply__T__ = (function(encoding) {
  return this.apply__T__Lscala_io_Codec(encoding)
});
ScalaJS.c.scala_io_Codec$.prototype.$default__ = (function() {
  return this.$default__Lscala_io_Codec()
});
ScalaJS.c.scala_io_Codec$.prototype.fileEncodingCodec__ = (function() {
  return this.fileEncodingCodec__Lscala_io_Codec()
});
ScalaJS.c.scala_io_Codec$.prototype.defaultCharsetCodec__ = (function() {
  return this.defaultCharsetCodec__Lscala_io_Codec()
});
ScalaJS.c.scala_io_Codec$.prototype.UTF8__ = (function() {
  return this.UTF8__Lscala_io_Codec()
});
ScalaJS.c.scala_io_Codec$.prototype.ISO8859__ = (function() {
  return this.ISO8859__Lscala_io_Codec()
});
/** @constructor */
ScalaJS.inheritable.scala_io_Codec$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_Codec$.prototype = ScalaJS.c.scala_io_Codec$.prototype;
ScalaJS.is.scala_io_Codec$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_Codec$)))
});
ScalaJS.as.scala_io_Codec$ = (function(obj) {
  if ((ScalaJS.is.scala_io_Codec$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.Codec")
  }
});
ScalaJS.isArrayOf.scala_io_Codec$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_Codec$)))
});
ScalaJS.asArrayOf.scala_io_Codec$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_Codec$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.Codec;", depth)
  }
});
ScalaJS.data.scala_io_Codec$ = new ScalaJS.ClassTypeData({
  scala_io_Codec$: 0
}, false, "scala.io.Codec$", ScalaJS.data.java_lang_Object, {
  scala_io_Codec$: 1,
  scala_io_LowPriorityCodecImplicits: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_Codec$.prototype.$classData = ScalaJS.data.scala_io_Codec$;
ScalaJS.moduleInstances.scala_io_Codec = undefined;
ScalaJS.modules.scala_io_Codec = (function() {
  if ((!ScalaJS.moduleInstances.scala_io_Codec)) {
    ScalaJS.moduleInstances.scala_io_Codec = new ScalaJS.c.scala_io_Codec$().init___()
  };
  return ScalaJS.moduleInstances.scala_io_Codec
});
//@ sourceMappingURL=Codec$.js.map
