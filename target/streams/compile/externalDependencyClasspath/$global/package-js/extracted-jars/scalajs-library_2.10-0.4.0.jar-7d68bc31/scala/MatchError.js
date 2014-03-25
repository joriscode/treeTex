/** @constructor */
ScalaJS.c.scala_MatchError = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this);
  this.obj$4 = null;
  this.objString$4 = null;
  this.bitmap$0$4 = false
});
ScalaJS.c.scala_MatchError.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.scala_MatchError.prototype.constructor = ScalaJS.c.scala_MatchError;
ScalaJS.c.scala_MatchError.prototype.objString$lzycompute__p4__T = (function() {
  if ((!this.bitmap$0$4)) {
    if (ScalaJS.anyRefEqEq(this.obj$4, null)) {
      var jsx$1 = "null"
    } else {
      var jsx$1 = (((("" + ScalaJS.objectToString(this.obj$4)) + " (of class ") + ScalaJS.objectGetClass(this.obj$4).getName__T()) + ")")
    };
    this.objString$4 = jsx$1;
    this.bitmap$0$4 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.objString$4
});
ScalaJS.c.scala_MatchError.prototype.objString__p4__T = (function() {
  if ((!this.bitmap$0$4)) {
    return this.objString$lzycompute__p4__T()
  } else {
    return this.objString$4
  }
});
ScalaJS.c.scala_MatchError.prototype.getMessage__T = (function() {
  return this.objString__p4__T()
});
ScalaJS.c.scala_MatchError.prototype.init___O = (function(obj) {
  this.obj$4 = obj;
  ScalaJS.c.java_lang_RuntimeException.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_MatchError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_MatchError.prototype = ScalaJS.c.scala_MatchError.prototype;
ScalaJS.is.scala_MatchError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_MatchError)))
});
ScalaJS.as.scala_MatchError = (function(obj) {
  if ((ScalaJS.is.scala_MatchError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.MatchError")
  }
});
ScalaJS.isArrayOf.scala_MatchError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_MatchError)))
});
ScalaJS.asArrayOf.scala_MatchError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_MatchError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.MatchError;", depth)
  }
});
ScalaJS.data.scala_MatchError = new ScalaJS.ClassTypeData({
  scala_MatchError: 0
}, false, "scala.MatchError", ScalaJS.data.java_lang_RuntimeException, {
  scala_MatchError: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_MatchError.prototype.$classData = ScalaJS.data.scala_MatchError;
//@ sourceMappingURL=MatchError.js.map
