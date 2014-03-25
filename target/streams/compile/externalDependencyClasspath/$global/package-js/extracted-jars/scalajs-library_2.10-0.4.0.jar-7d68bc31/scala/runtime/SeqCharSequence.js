/** @constructor */
ScalaJS.c.scala_runtime_SeqCharSequence = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.xs$1 = null
});
ScalaJS.c.scala_runtime_SeqCharSequence.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_SeqCharSequence.prototype.constructor = ScalaJS.c.scala_runtime_SeqCharSequence;
ScalaJS.c.scala_runtime_SeqCharSequence.prototype.xs__Lscala_collection_IndexedSeq = (function() {
  return this.xs$1
});
ScalaJS.c.scala_runtime_SeqCharSequence.prototype.length__I = (function() {
  return this.xs__Lscala_collection_IndexedSeq().length__I()
});
ScalaJS.c.scala_runtime_SeqCharSequence.prototype.charAt__I__C = (function(index) {
  return ScalaJS.uC(this.xs__Lscala_collection_IndexedSeq().apply__I__O(index))
});
ScalaJS.c.scala_runtime_SeqCharSequence.prototype.subSequence__I__I__Ljava_lang_CharSequence = (function(start, end) {
  return new ScalaJS.c.scala_runtime_SeqCharSequence().init___Lscala_collection_IndexedSeq(ScalaJS.as.scala_collection_IndexedSeq(this.xs__Lscala_collection_IndexedSeq().slice__I__I__O(start, end)))
});
ScalaJS.c.scala_runtime_SeqCharSequence.prototype.toString__T = (function() {
  return this.xs__Lscala_collection_IndexedSeq().mkString__T__T("")
});
ScalaJS.c.scala_runtime_SeqCharSequence.prototype.init___Lscala_collection_IndexedSeq = (function(xs) {
  this.xs$1 = xs;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_SeqCharSequence.prototype.subSequence__I__I__ = (function(start, end) {
  return this.subSequence__I__I__Ljava_lang_CharSequence(start, end)
});
ScalaJS.c.scala_runtime_SeqCharSequence.prototype.charAt__I__ = (function(index) {
  return ScalaJS.bC(this.charAt__I__C(index))
});
ScalaJS.c.scala_runtime_SeqCharSequence.prototype.length__ = (function() {
  return ScalaJS.bI(this.length__I())
});
ScalaJS.c.scala_runtime_SeqCharSequence.prototype.xs__ = (function() {
  return this.xs__Lscala_collection_IndexedSeq()
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_SeqCharSequence = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_SeqCharSequence.prototype = ScalaJS.c.scala_runtime_SeqCharSequence.prototype;
ScalaJS.is.scala_runtime_SeqCharSequence = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_SeqCharSequence)))
});
ScalaJS.as.scala_runtime_SeqCharSequence = (function(obj) {
  if ((ScalaJS.is.scala_runtime_SeqCharSequence(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.SeqCharSequence")
  }
});
ScalaJS.isArrayOf.scala_runtime_SeqCharSequence = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_SeqCharSequence)))
});
ScalaJS.asArrayOf.scala_runtime_SeqCharSequence = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_SeqCharSequence(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.SeqCharSequence;", depth)
  }
});
ScalaJS.data.scala_runtime_SeqCharSequence = new ScalaJS.ClassTypeData({
  scala_runtime_SeqCharSequence: 0
}, false, "scala.runtime.SeqCharSequence", ScalaJS.data.java_lang_Object, {
  scala_runtime_SeqCharSequence: 1,
  java_lang_CharSequence: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_SeqCharSequence.prototype.$classData = ScalaJS.data.scala_runtime_SeqCharSequence;
//@ sourceMappingURL=SeqCharSequence.js.map
