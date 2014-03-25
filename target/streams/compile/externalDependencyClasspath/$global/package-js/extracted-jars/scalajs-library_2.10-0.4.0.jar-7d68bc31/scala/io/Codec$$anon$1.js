/** @constructor */
ScalaJS.c.scala_io_Codec$$anon$1 = (function() {
  ScalaJS.c.scala_io_Codec.call(this);
  this.$$unddecoder$1$2 = null
});
ScalaJS.c.scala_io_Codec$$anon$1.prototype = new ScalaJS.inheritable.scala_io_Codec();
ScalaJS.c.scala_io_Codec$$anon$1.prototype.constructor = ScalaJS.c.scala_io_Codec$$anon$1;
ScalaJS.c.scala_io_Codec$$anon$1.prototype.decoder__Ljava_nio_charset_CharsetDecoder = (function() {
  return this.$$unddecoder$1$2
});
ScalaJS.c.scala_io_Codec$$anon$1.prototype.init___Ljava_nio_charset_CharsetDecoder__Ljava_nio_charset_CharsetDecoder = (function(decoder$1, _decoder$1) {
  this.$$unddecoder$1$2 = _decoder$1;
  ScalaJS.c.scala_io_Codec.prototype.init___Ljava_nio_charset_Charset.call(this, decoder$1.charset__Ljava_nio_charset_Charset());
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_io_Codec$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_Codec$$anon$1.prototype = ScalaJS.c.scala_io_Codec$$anon$1.prototype;
ScalaJS.is.scala_io_Codec$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_Codec$$anon$1)))
});
ScalaJS.as.scala_io_Codec$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_io_Codec$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.Codec$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_io_Codec$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_Codec$$anon$1)))
});
ScalaJS.asArrayOf.scala_io_Codec$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_Codec$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.Codec$$anon$1;", depth)
  }
});
ScalaJS.data.scala_io_Codec$$anon$1 = new ScalaJS.ClassTypeData({
  scala_io_Codec$$anon$1: 0
}, false, "scala.io.Codec$$anon$1", ScalaJS.data.scala_io_Codec, {
  scala_io_Codec$$anon$1: 1,
  scala_io_Codec: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_Codec$$anon$1.prototype.$classData = ScalaJS.data.scala_io_Codec$$anon$1;
//@ sourceMappingURL=Codec$$anon$1.js.map
