/** @constructor */
ScalaJS.c.java_lang_StringBuilder = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.content$1 = null
});
ScalaJS.c.java_lang_StringBuilder.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_StringBuilder.prototype.constructor = ScalaJS.c.java_lang_StringBuilder;
ScalaJS.c.java_lang_StringBuilder.prototype.content__p1__T = (function() {
  return this.content$1
});
ScalaJS.c.java_lang_StringBuilder.prototype.content$und$eq__p1__T__V = (function(x$1) {
  this.content$1 = x$1
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__T__Ljava_lang_StringBuilder = (function(s) {
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
ScalaJS.c.java_lang_StringBuilder.prototype.append__Ljava_lang_Boolean__Ljava_lang_StringBuilder = (function(b) {
  return this.append__T__Ljava_lang_StringBuilder(b.toString__T())
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__C__Ljava_lang_StringBuilder = (function(c) {
  return this.append__T__Ljava_lang_StringBuilder(ScalaJS.objectToString(ScalaJS.bC(c)))
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__Ljava_lang_Byte__Ljava_lang_StringBuilder = (function(b) {
  return this.append__T__Ljava_lang_StringBuilder(b.toString__T())
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__Ljava_lang_Short__Ljava_lang_StringBuilder = (function(s) {
  return this.append__T__Ljava_lang_StringBuilder(s.toString__T())
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__I__Ljava_lang_StringBuilder = (function(i) {
  return this.append__T__Ljava_lang_StringBuilder(ScalaJS.objectToString(ScalaJS.bI(i)))
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__Ljava_lang_Long__Ljava_lang_StringBuilder = (function(lng) {
  return this.append__T__Ljava_lang_StringBuilder(lng.toString__T())
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__Ljava_lang_Float__Ljava_lang_StringBuilder = (function(f) {
  return this.append__T__Ljava_lang_StringBuilder(f.toString__T())
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__Ljava_lang_Double__Ljava_lang_StringBuilder = (function(d) {
  return this.append__T__Ljava_lang_StringBuilder(d.toString__T())
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__O__Ljava_lang_StringBuilder = (function(obj) {
  if (ScalaJS.anyRefEqEq(obj, null)) {
    return this.append__T__Ljava_lang_StringBuilder(null)
  } else {
    return this.append__T__Ljava_lang_StringBuilder(ScalaJS.objectToString(obj))
  }
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__Ljava_lang_CharSequence__Ljava_lang_StringBuilder = (function(csq) {
  return this.append__O__Ljava_lang_StringBuilder(csq)
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__Ljava_lang_CharSequence__I__I__Ljava_lang_StringBuilder = (function(csq, start, end) {
  if (ScalaJS.anyRefEqEq(csq, null)) {
    return this.append__Ljava_lang_CharSequence__I__I__Ljava_lang_StringBuilder("null", start, end)
  } else {
    return this.append__T__Ljava_lang_StringBuilder(ScalaJS.objectToString(ScalaJS.charSequenceSubSequence(csq, start, end)))
  }
});
ScalaJS.c.java_lang_StringBuilder.prototype.toString__T = (function() {
  return this.content__p1__T()
});
ScalaJS.c.java_lang_StringBuilder.prototype.length__I = (function() {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(this.content__p1__T())
});
ScalaJS.c.java_lang_StringBuilder.prototype.charAt__I__C = (function(index) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(this.content__p1__T(), index)
});
ScalaJS.c.java_lang_StringBuilder.prototype.codePointAt__I__I = (function(index) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__codePointAt__Lscala_scalajs_runtime_RuntimeString__I__I(this.content__p1__T(), index)
});
ScalaJS.c.java_lang_StringBuilder.prototype.indexOf__T__I = (function(str) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__T__I(this.content__p1__T(), str)
});
ScalaJS.c.java_lang_StringBuilder.prototype.indexOf__T__I__I = (function(str, fromIndex) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__T__I__I(this.content__p1__T(), str, fromIndex)
});
ScalaJS.c.java_lang_StringBuilder.prototype.lastIndexOf__T__I = (function(str) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__lastIndexOf__Lscala_scalajs_runtime_RuntimeString__T__I(this.content__p1__T(), str)
});
ScalaJS.c.java_lang_StringBuilder.prototype.lastIndexOf__T__I__I = (function(str, fromIndex) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__lastIndexOf__Lscala_scalajs_runtime_RuntimeString__T__I__I(this.content__p1__T(), str, fromIndex)
});
ScalaJS.c.java_lang_StringBuilder.prototype.subSequence__I__I__Ljava_lang_CharSequence = (function(start, end) {
  return this.substring__I__I__T(start, end)
});
ScalaJS.c.java_lang_StringBuilder.prototype.substring__I__T = (function(start) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__T(this.content__p1__T(), start)
});
ScalaJS.c.java_lang_StringBuilder.prototype.substring__I__I__T = (function(start, end) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(this.content__p1__T(), start, end)
});
ScalaJS.c.java_lang_StringBuilder.prototype.reverse__Ljava_lang_StringBuilder = (function() {
  var original = this.content__p1__T();
  var result = "";
  var i = 0;
  while ((i < ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(original))) {
    var c = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(original, i);
    if ((ScalaJS.modules.java_lang_Character().isHighSurrogate__C__Z(c) && ((i + 1) < ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(original)))) {
      var c2 = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C(original, (i + 1));
      if (ScalaJS.modules.java_lang_Character().isLowSurrogate__C__Z(c2)) {
        result = ((("" + ScalaJS.objectToString(ScalaJS.bC(c))) + ScalaJS.objectToString(ScalaJS.bC(c2))) + result);
        i = (i + 2)
      } else {
        result = (("" + ScalaJS.objectToString(ScalaJS.bC(c))) + result);
        i = (i + 1)
      }
    } else {
      result = (("" + ScalaJS.objectToString(ScalaJS.bC(c))) + result);
      i = (i + 1)
    }
  };
  this.content$und$eq__p1__T__V(result);
  return this
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__Ljava_lang_CharSequence__I__I__Ljava_lang_Appendable = (function(csq, start, end) {
  return this.append__Ljava_lang_CharSequence__I__I__Ljava_lang_StringBuilder(csq, start, end)
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__Ljava_lang_CharSequence__Ljava_lang_Appendable = (function(csq) {
  return this.append__Ljava_lang_CharSequence__Ljava_lang_StringBuilder(csq)
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__C__Ljava_lang_Appendable = (function(c) {
  return this.append__C__Ljava_lang_StringBuilder(c)
});
ScalaJS.c.java_lang_StringBuilder.prototype.init___T = (function(content) {
  this.content$1 = content;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_lang_StringBuilder.prototype.init___ = (function() {
  ScalaJS.c.java_lang_StringBuilder.prototype.init___T.call(this, "");
  return this
});
ScalaJS.c.java_lang_StringBuilder.prototype.init___I = (function(initialCapacity) {
  ScalaJS.c.java_lang_StringBuilder.prototype.init___T.call(this, "");
  return this
});
ScalaJS.c.java_lang_StringBuilder.prototype.init___Ljava_lang_CharSequence = (function(csq) {
  ScalaJS.c.java_lang_StringBuilder.prototype.init___T.call(this, ScalaJS.objectToString(csq));
  return this
});
ScalaJS.c.java_lang_StringBuilder.prototype.reverse__ = (function() {
  return this.reverse__Ljava_lang_StringBuilder()
});
ScalaJS.c.java_lang_StringBuilder.prototype.substring__I__I__ = (function(start, end) {
  return this.substring__I__I__T(start, end)
});
ScalaJS.c.java_lang_StringBuilder.prototype.substring__I__ = (function(start$2) {
  return this.substring__I__T(start$2)
});
ScalaJS.c.java_lang_StringBuilder.prototype.subSequence__I__I__ = (function(start$3, end$2) {
  return this.subSequence__I__I__Ljava_lang_CharSequence(start$3, end$2)
});
ScalaJS.c.java_lang_StringBuilder.prototype.lastIndexOf__T__I__ = (function(str, fromIndex) {
  return ScalaJS.bI(this.lastIndexOf__T__I__I(str, fromIndex))
});
ScalaJS.c.java_lang_StringBuilder.prototype.lastIndexOf__T__ = (function(str$2) {
  return ScalaJS.bI(this.lastIndexOf__T__I(str$2))
});
ScalaJS.c.java_lang_StringBuilder.prototype.indexOf__T__I__ = (function(str$3, fromIndex$2) {
  return ScalaJS.bI(this.indexOf__T__I__I(str$3, fromIndex$2))
});
ScalaJS.c.java_lang_StringBuilder.prototype.indexOf__T__ = (function(str$4) {
  return ScalaJS.bI(this.indexOf__T__I(str$4))
});
ScalaJS.c.java_lang_StringBuilder.prototype.codePointAt__I__ = (function(index) {
  return ScalaJS.bI(this.codePointAt__I__I(index))
});
ScalaJS.c.java_lang_StringBuilder.prototype.charAt__I__ = (function(index$2) {
  return ScalaJS.bC(this.charAt__I__C(index$2))
});
ScalaJS.c.java_lang_StringBuilder.prototype.length__ = (function() {
  return ScalaJS.bI(this.length__I())
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__Ljava_lang_CharSequence__I__I__ = (function(csq, start$4, end$3) {
  return this.append__Ljava_lang_CharSequence__I__I__Ljava_lang_StringBuilder(csq, start$4, end$3)
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__Ljava_lang_CharSequence__ = (function(csq$2) {
  return this.append__Ljava_lang_CharSequence__Ljava_lang_StringBuilder(csq$2)
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__O__ = (function(obj) {
  return this.append__O__Ljava_lang_StringBuilder(obj)
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__Ljava_lang_Double__ = (function(d) {
  return this.append__Ljava_lang_Double__Ljava_lang_StringBuilder(d)
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__Ljava_lang_Float__ = (function(f) {
  return this.append__Ljava_lang_Float__Ljava_lang_StringBuilder(f)
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__Ljava_lang_Long__ = (function(lng) {
  return this.append__Ljava_lang_Long__Ljava_lang_StringBuilder(lng)
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__I__ = (function(i) {
  return this.append__I__Ljava_lang_StringBuilder(i)
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__Ljava_lang_Short__ = (function(s) {
  return this.append__Ljava_lang_Short__Ljava_lang_StringBuilder(s)
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__Ljava_lang_Byte__ = (function(b) {
  return this.append__Ljava_lang_Byte__Ljava_lang_StringBuilder(b)
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__C__ = (function(c) {
  return this.append__C__Ljava_lang_StringBuilder(c)
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__Ljava_lang_Boolean__ = (function(b$2) {
  return this.append__Ljava_lang_Boolean__Ljava_lang_StringBuilder(b$2)
});
ScalaJS.c.java_lang_StringBuilder.prototype.append__T__ = (function(s$2) {
  return this.append__T__Ljava_lang_StringBuilder(s$2)
});
/** @constructor */
ScalaJS.inheritable.java_lang_StringBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_StringBuilder.prototype = ScalaJS.c.java_lang_StringBuilder.prototype;
ScalaJS.is.java_lang_StringBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_StringBuilder)))
});
ScalaJS.as.java_lang_StringBuilder = (function(obj) {
  if ((ScalaJS.is.java_lang_StringBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.StringBuilder")
  }
});
ScalaJS.isArrayOf.java_lang_StringBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_StringBuilder)))
});
ScalaJS.asArrayOf.java_lang_StringBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_StringBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.StringBuilder;", depth)
  }
});
ScalaJS.data.java_lang_StringBuilder = new ScalaJS.ClassTypeData({
  java_lang_StringBuilder: 0
}, false, "java.lang.StringBuilder", ScalaJS.data.java_lang_Object, {
  java_lang_StringBuilder: 1,
  java_io_Serializable: 1,
  java_lang_Appendable: 1,
  java_lang_CharSequence: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_StringBuilder.prototype.$classData = ScalaJS.data.java_lang_StringBuilder;
//@ sourceMappingURL=StringBuilder.js.map
