/** @constructor */
ScalaJS.c.java_lang_StringBuffer = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.content$1 = null
});
ScalaJS.c.java_lang_StringBuffer.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_StringBuffer.prototype.constructor = ScalaJS.c.java_lang_StringBuffer;
ScalaJS.c.java_lang_StringBuffer.prototype.content__p1__T = (function() {
  return this.content$1
});
ScalaJS.c.java_lang_StringBuffer.prototype.content$und$eq__p1__T__V = (function(x$1) {
  this.content$1 = x$1
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__T__Ljava_lang_StringBuffer = (function(s) {
  var jsx$3 = ("" + this.content__p1__T());
  if (ScalaJS.anyRefEqEq(s, null)) {
    var jsx$2 = "null"
  } else {
    var jsx$2 = s
  };
  var jsx$1 = (jsx$3 + jsx$2);
  this.content$und$eq__p1__T__V(jsx$1);
  return this
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__Ljava_lang_Boolean__Ljava_lang_StringBuffer = (function(b) {
  return this.append__T__Ljava_lang_StringBuffer(b.toString__T())
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__C__Ljava_lang_StringBuffer = (function(c) {
  return this.append__T__Ljava_lang_StringBuffer(ScalaJS.objectToString(ScalaJS.bC(c)))
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__Ljava_lang_Byte__Ljava_lang_StringBuffer = (function(b) {
  return this.append__T__Ljava_lang_StringBuffer(b.toString__T())
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__Ljava_lang_Short__Ljava_lang_StringBuffer = (function(s) {
  return this.append__T__Ljava_lang_StringBuffer(s.toString__T())
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__I__Ljava_lang_StringBuffer = (function(i) {
  return this.append__T__Ljava_lang_StringBuffer(ScalaJS.objectToString(ScalaJS.bI(i)))
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__Ljava_lang_Long__Ljava_lang_StringBuffer = (function(lng) {
  return this.append__T__Ljava_lang_StringBuffer(lng.toString__T())
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__Ljava_lang_Float__Ljava_lang_StringBuffer = (function(f) {
  return this.append__T__Ljava_lang_StringBuffer(f.toString__T())
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__Ljava_lang_Double__Ljava_lang_StringBuffer = (function(d) {
  return this.append__T__Ljava_lang_StringBuffer(d.toString__T())
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__O__Ljava_lang_StringBuffer = (function(obj) {
  if (ScalaJS.anyRefEqEq(obj, null)) {
    return this.append__T__Ljava_lang_StringBuffer(null)
  } else {
    return this.append__T__Ljava_lang_StringBuffer(ScalaJS.objectToString(obj))
  }
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__Ljava_lang_CharSequence__Ljava_lang_StringBuffer = (function(csq) {
  return this.append__O__Ljava_lang_StringBuffer(csq)
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__Ljava_lang_CharSequence__I__I__Ljava_lang_StringBuffer = (function(csq, start, end) {
  if (ScalaJS.anyRefEqEq(csq, null)) {
    return this.append__Ljava_lang_CharSequence__I__I__Ljava_lang_StringBuffer("null", start, end)
  } else {
    return this.append__T__Ljava_lang_StringBuffer(ScalaJS.objectToString(ScalaJS.charSequenceSubSequence(csq, start, end)))
  }
});
ScalaJS.c.java_lang_StringBuffer.prototype.toString__T = (function() {
  return this.content__p1__T()
});
ScalaJS.c.java_lang_StringBuffer.prototype.length__I = (function() {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(this.content__p1__T())
});
ScalaJS.c.java_lang_StringBuffer.prototype.charAt__I__C = (function(index) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(this.content__p1__T(), index)
});
ScalaJS.c.java_lang_StringBuffer.prototype.codePointAt__I__I = (function(index) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__codePointAt__Lscala_scalajs_runtime_RuntimeString__I__I(this.content__p1__T(), index)
});
ScalaJS.c.java_lang_StringBuffer.prototype.indexOf__T__I = (function(str) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__T__I(this.content__p1__T(), str)
});
ScalaJS.c.java_lang_StringBuffer.prototype.indexOf__T__I__I = (function(str, fromIndex) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__T__I__I(this.content__p1__T(), str, fromIndex)
});
ScalaJS.c.java_lang_StringBuffer.prototype.lastIndexOf__T__I = (function(str) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__lastIndexOf__Lscala_scalajs_runtime_RuntimeString__T__I(this.content__p1__T(), str)
});
ScalaJS.c.java_lang_StringBuffer.prototype.lastIndexOf__T__I__I = (function(str, fromIndex) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__lastIndexOf__Lscala_scalajs_runtime_RuntimeString__T__I__I(this.content__p1__T(), str, fromIndex)
});
ScalaJS.c.java_lang_StringBuffer.prototype.subSequence__I__I__Ljava_lang_CharSequence = (function(start, end) {
  return this.substring__I__I__T(start, end)
});
ScalaJS.c.java_lang_StringBuffer.prototype.substring__I__T = (function(start) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__T(this.content__p1__T(), start)
});
ScalaJS.c.java_lang_StringBuffer.prototype.substring__I__I__T = (function(start, end) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(this.content__p1__T(), start, end)
});
ScalaJS.c.java_lang_StringBuffer.prototype.reverse__Ljava_lang_StringBuffer = (function() {
  this.content$und$eq__p1__T__V(new ScalaJS.c.java_lang_StringBuilder().init___T(this.content__p1__T()).reverse__Ljava_lang_StringBuilder().toString__T());
  return this
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__Ljava_lang_CharSequence__I__I__Ljava_lang_Appendable = (function(csq, start, end) {
  return this.append__Ljava_lang_CharSequence__I__I__Ljava_lang_StringBuffer(csq, start, end)
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__Ljava_lang_CharSequence__Ljava_lang_Appendable = (function(csq) {
  return this.append__Ljava_lang_CharSequence__Ljava_lang_StringBuffer(csq)
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__C__Ljava_lang_Appendable = (function(c) {
  return this.append__C__Ljava_lang_StringBuffer(c)
});
ScalaJS.c.java_lang_StringBuffer.prototype.init___T = (function(content) {
  this.content$1 = content;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_lang_StringBuffer.prototype.init___ = (function() {
  ScalaJS.c.java_lang_StringBuffer.prototype.init___T.call(this, "");
  return this
});
ScalaJS.c.java_lang_StringBuffer.prototype.init___I = (function(initialCapacity) {
  ScalaJS.c.java_lang_StringBuffer.prototype.init___T.call(this, "");
  return this
});
ScalaJS.c.java_lang_StringBuffer.prototype.init___Ljava_lang_CharSequence = (function(csq) {
  ScalaJS.c.java_lang_StringBuffer.prototype.init___T.call(this, ScalaJS.objectToString(csq));
  return this
});
ScalaJS.c.java_lang_StringBuffer.prototype.reverse__ = (function() {
  return this.reverse__Ljava_lang_StringBuffer()
});
ScalaJS.c.java_lang_StringBuffer.prototype.substring__I__I__ = (function(start, end) {
  return this.substring__I__I__T(start, end)
});
ScalaJS.c.java_lang_StringBuffer.prototype.substring__I__ = (function(start$2) {
  return this.substring__I__T(start$2)
});
ScalaJS.c.java_lang_StringBuffer.prototype.subSequence__I__I__ = (function(start$3, end$2) {
  return this.subSequence__I__I__Ljava_lang_CharSequence(start$3, end$2)
});
ScalaJS.c.java_lang_StringBuffer.prototype.lastIndexOf__T__I__ = (function(str, fromIndex) {
  return ScalaJS.bI(this.lastIndexOf__T__I__I(str, fromIndex))
});
ScalaJS.c.java_lang_StringBuffer.prototype.lastIndexOf__T__ = (function(str$2) {
  return ScalaJS.bI(this.lastIndexOf__T__I(str$2))
});
ScalaJS.c.java_lang_StringBuffer.prototype.indexOf__T__I__ = (function(str$3, fromIndex$2) {
  return ScalaJS.bI(this.indexOf__T__I__I(str$3, fromIndex$2))
});
ScalaJS.c.java_lang_StringBuffer.prototype.indexOf__T__ = (function(str$4) {
  return ScalaJS.bI(this.indexOf__T__I(str$4))
});
ScalaJS.c.java_lang_StringBuffer.prototype.codePointAt__I__ = (function(index) {
  return ScalaJS.bI(this.codePointAt__I__I(index))
});
ScalaJS.c.java_lang_StringBuffer.prototype.charAt__I__ = (function(index$2) {
  return ScalaJS.bC(this.charAt__I__C(index$2))
});
ScalaJS.c.java_lang_StringBuffer.prototype.length__ = (function() {
  return ScalaJS.bI(this.length__I())
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__Ljava_lang_CharSequence__I__I__ = (function(csq, start$4, end$3) {
  return this.append__Ljava_lang_CharSequence__I__I__Ljava_lang_StringBuffer(csq, start$4, end$3)
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__Ljava_lang_CharSequence__ = (function(csq$2) {
  return this.append__Ljava_lang_CharSequence__Ljava_lang_StringBuffer(csq$2)
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__O__ = (function(obj) {
  return this.append__O__Ljava_lang_StringBuffer(obj)
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__Ljava_lang_Double__ = (function(d) {
  return this.append__Ljava_lang_Double__Ljava_lang_StringBuffer(d)
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__Ljava_lang_Float__ = (function(f) {
  return this.append__Ljava_lang_Float__Ljava_lang_StringBuffer(f)
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__Ljava_lang_Long__ = (function(lng) {
  return this.append__Ljava_lang_Long__Ljava_lang_StringBuffer(lng)
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__I__ = (function(i) {
  return this.append__I__Ljava_lang_StringBuffer(i)
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__Ljava_lang_Short__ = (function(s) {
  return this.append__Ljava_lang_Short__Ljava_lang_StringBuffer(s)
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__Ljava_lang_Byte__ = (function(b) {
  return this.append__Ljava_lang_Byte__Ljava_lang_StringBuffer(b)
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__C__ = (function(c) {
  return this.append__C__Ljava_lang_StringBuffer(c)
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__Ljava_lang_Boolean__ = (function(b$2) {
  return this.append__Ljava_lang_Boolean__Ljava_lang_StringBuffer(b$2)
});
ScalaJS.c.java_lang_StringBuffer.prototype.append__T__ = (function(s$2) {
  return this.append__T__Ljava_lang_StringBuffer(s$2)
});
/** @constructor */
ScalaJS.inheritable.java_lang_StringBuffer = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_StringBuffer.prototype = ScalaJS.c.java_lang_StringBuffer.prototype;
ScalaJS.is.java_lang_StringBuffer = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_StringBuffer)))
});
ScalaJS.as.java_lang_StringBuffer = (function(obj) {
  if ((ScalaJS.is.java_lang_StringBuffer(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.StringBuffer")
  }
});
ScalaJS.isArrayOf.java_lang_StringBuffer = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_StringBuffer)))
});
ScalaJS.asArrayOf.java_lang_StringBuffer = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_StringBuffer(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.StringBuffer;", depth)
  }
});
ScalaJS.data.java_lang_StringBuffer = new ScalaJS.ClassTypeData({
  java_lang_StringBuffer: 0
}, false, "java.lang.StringBuffer", ScalaJS.data.java_lang_Object, {
  java_lang_StringBuffer: 1,
  java_io_Serializable: 1,
  java_lang_Appendable: 1,
  java_lang_CharSequence: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_StringBuffer.prototype.$classData = ScalaJS.data.java_lang_StringBuffer;
//@ sourceMappingURL=StringBuffer.js.map
