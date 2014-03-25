/** @constructor */
ScalaJS.c.scala_runtime_ArrayCharSequence = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.xs$1 = null;
  this.start$1 = 0;
  this.end$1 = 0
});
ScalaJS.c.scala_runtime_ArrayCharSequence.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_ArrayCharSequence.prototype.constructor = ScalaJS.c.scala_runtime_ArrayCharSequence;
ScalaJS.c.scala_runtime_ArrayCharSequence.prototype.xs__AC = (function() {
  return this.xs$1
});
ScalaJS.c.scala_runtime_ArrayCharSequence.prototype.length__I = (function() {
  return ScalaJS.modules.scala_math_package().max__I__I__I(0, (this.end$1 - this.start$1))
});
ScalaJS.c.scala_runtime_ArrayCharSequence.prototype.charAt__I__C = (function(index) {
  if (((0 <= index) && (index < this.length__I()))) {
    return this.xs__AC().underlying[(this.start$1 + index)]
  } else {
    throw new ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException().init___I(index)
  }
});
ScalaJS.c.scala_runtime_ArrayCharSequence.prototype.subSequence__I__I__Ljava_lang_CharSequence = (function(start0, end0) {
  if ((start0 < 0)) {
    throw new ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException().init___I(start0)
  } else {
    if ((end0 > this.length__I())) {
      throw new ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException().init___I(end0)
    } else {
      if ((end0 <= start0)) {
        return new ScalaJS.c.scala_runtime_ArrayCharSequence().init___AC__I__I(this.xs__AC(), 0, 0)
      } else {
        var newlen = (end0 - start0);
        var start1 = (this.start$1 + start0);
        return new ScalaJS.c.scala_runtime_ArrayCharSequence().init___AC__I__I(this.xs__AC(), start1, (start1 + newlen))
      }
    }
  }
});
ScalaJS.c.scala_runtime_ArrayCharSequence.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_Predef().charArrayOps__AC__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.scala_Char(ScalaJS.modules.scala_Predef().charArrayOps__AC__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.scala_Char(ScalaJS.modules.scala_Predef().charArrayOps__AC__Lscala_collection_mutable_ArrayOps(this.xs__AC()).drop__I__O(this.start$1), 1)).take__I__O(this.length__I()), 1)).mkString__T__T("")
});
ScalaJS.c.scala_runtime_ArrayCharSequence.prototype.init___AC__I__I = (function(xs, start, end) {
  this.xs$1 = xs;
  this.start$1 = start;
  this.end$1 = end;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_runtime_ArrayCharSequence.prototype.subSequence__I__I__ = (function(start0, end0) {
  return this.subSequence__I__I__Ljava_lang_CharSequence(start0, end0)
});
ScalaJS.c.scala_runtime_ArrayCharSequence.prototype.charAt__I__ = (function(index) {
  return ScalaJS.bC(this.charAt__I__C(index))
});
ScalaJS.c.scala_runtime_ArrayCharSequence.prototype.length__ = (function() {
  return ScalaJS.bI(this.length__I())
});
ScalaJS.c.scala_runtime_ArrayCharSequence.prototype.xs__ = (function() {
  return this.xs__AC()
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_ArrayCharSequence = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_ArrayCharSequence.prototype = ScalaJS.c.scala_runtime_ArrayCharSequence.prototype;
ScalaJS.is.scala_runtime_ArrayCharSequence = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_ArrayCharSequence)))
});
ScalaJS.as.scala_runtime_ArrayCharSequence = (function(obj) {
  if ((ScalaJS.is.scala_runtime_ArrayCharSequence(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.ArrayCharSequence")
  }
});
ScalaJS.isArrayOf.scala_runtime_ArrayCharSequence = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_ArrayCharSequence)))
});
ScalaJS.asArrayOf.scala_runtime_ArrayCharSequence = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_ArrayCharSequence(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.ArrayCharSequence;", depth)
  }
});
ScalaJS.data.scala_runtime_ArrayCharSequence = new ScalaJS.ClassTypeData({
  scala_runtime_ArrayCharSequence: 0
}, false, "scala.runtime.ArrayCharSequence", ScalaJS.data.java_lang_Object, {
  scala_runtime_ArrayCharSequence: 1,
  java_lang_CharSequence: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_ArrayCharSequence.prototype.$classData = ScalaJS.data.scala_runtime_ArrayCharSequence;
//@ sourceMappingURL=ArrayCharSequence.js.map
