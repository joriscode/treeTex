/** @constructor */
ScalaJS.c.scala_io_BytePickle$Ref$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.scala_io_BytePickle$Ref$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.scala_io_BytePickle$Ref$.prototype.constructor = ScalaJS.c.scala_io_BytePickle$Ref$;
ScalaJS.c.scala_io_BytePickle$Ref$.prototype.toString__T = (function() {
  return "Ref"
});
ScalaJS.c.scala_io_BytePickle$Ref$.prototype.apply__Lscala_io_BytePickle$Ref = (function() {
  return new ScalaJS.c.scala_io_BytePickle$Ref().init___()
});
ScalaJS.c.scala_io_BytePickle$Ref$.prototype.unapply__Lscala_io_BytePickle$Ref__Z = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return false
  } else {
    return true
  }
});
ScalaJS.c.scala_io_BytePickle$Ref$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_io_BytePickle$Ref()
});
ScalaJS.c.scala_io_BytePickle$Ref$.prototype.apply__O = (function() {
  return this.apply__Lscala_io_BytePickle$Ref()
});
ScalaJS.c.scala_io_BytePickle$Ref$.prototype.unapply__Lscala_io_BytePickle$Ref__ = (function(x$0) {
  return ScalaJS.bZ(this.unapply__Lscala_io_BytePickle$Ref__Z(x$0))
});
/** @constructor */
ScalaJS.inheritable.scala_io_BytePickle$Ref$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BytePickle$Ref$.prototype = ScalaJS.c.scala_io_BytePickle$Ref$.prototype;
ScalaJS.is.scala_io_BytePickle$Ref$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BytePickle$Ref$)))
});
ScalaJS.as.scala_io_BytePickle$Ref$ = (function(obj) {
  if ((ScalaJS.is.scala_io_BytePickle$Ref$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BytePickle$Ref")
  }
});
ScalaJS.isArrayOf.scala_io_BytePickle$Ref$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BytePickle$Ref$)))
});
ScalaJS.asArrayOf.scala_io_BytePickle$Ref$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BytePickle$Ref$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BytePickle$Ref;", depth)
  }
});
ScalaJS.data.scala_io_BytePickle$Ref$ = new ScalaJS.ClassTypeData({
  scala_io_BytePickle$Ref$: 0
}, false, "scala.io.BytePickle$Ref$", ScalaJS.data.scala_runtime_AbstractFunction0, {
  scala_io_BytePickle$Ref$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BytePickle$Ref$.prototype.$classData = ScalaJS.data.scala_io_BytePickle$Ref$;
ScalaJS.moduleInstances.scala_io_BytePickle$Ref = undefined;
ScalaJS.modules.scala_io_BytePickle$Ref = (function() {
  if ((!ScalaJS.moduleInstances.scala_io_BytePickle$Ref)) {
    ScalaJS.moduleInstances.scala_io_BytePickle$Ref = new ScalaJS.c.scala_io_BytePickle$Ref$().init___()
  };
  return ScalaJS.moduleInstances.scala_io_BytePickle$Ref
});
//@ sourceMappingURL=BytePickle$Ref$.js.map
