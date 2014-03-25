/** @constructor */
ScalaJS.c.scala_io_BytePickle$Def$ = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction0.call(this)
});
ScalaJS.c.scala_io_BytePickle$Def$.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction0();
ScalaJS.c.scala_io_BytePickle$Def$.prototype.constructor = ScalaJS.c.scala_io_BytePickle$Def$;
ScalaJS.c.scala_io_BytePickle$Def$.prototype.toString__T = (function() {
  return "Def"
});
ScalaJS.c.scala_io_BytePickle$Def$.prototype.apply__Lscala_io_BytePickle$Def = (function() {
  return new ScalaJS.c.scala_io_BytePickle$Def().init___()
});
ScalaJS.c.scala_io_BytePickle$Def$.prototype.unapply__Lscala_io_BytePickle$Def__Z = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return false
  } else {
    return true
  }
});
ScalaJS.c.scala_io_BytePickle$Def$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_io_BytePickle$Def()
});
ScalaJS.c.scala_io_BytePickle$Def$.prototype.apply__O = (function() {
  return this.apply__Lscala_io_BytePickle$Def()
});
ScalaJS.c.scala_io_BytePickle$Def$.prototype.unapply__Lscala_io_BytePickle$Def__ = (function(x$0) {
  return ScalaJS.bZ(this.unapply__Lscala_io_BytePickle$Def__Z(x$0))
});
/** @constructor */
ScalaJS.inheritable.scala_io_BytePickle$Def$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_BytePickle$Def$.prototype = ScalaJS.c.scala_io_BytePickle$Def$.prototype;
ScalaJS.is.scala_io_BytePickle$Def$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_BytePickle$Def$)))
});
ScalaJS.as.scala_io_BytePickle$Def$ = (function(obj) {
  if ((ScalaJS.is.scala_io_BytePickle$Def$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.BytePickle$Def")
  }
});
ScalaJS.isArrayOf.scala_io_BytePickle$Def$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_BytePickle$Def$)))
});
ScalaJS.asArrayOf.scala_io_BytePickle$Def$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_BytePickle$Def$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.BytePickle$Def;", depth)
  }
});
ScalaJS.data.scala_io_BytePickle$Def$ = new ScalaJS.ClassTypeData({
  scala_io_BytePickle$Def$: 0
}, false, "scala.io.BytePickle$Def$", ScalaJS.data.scala_runtime_AbstractFunction0, {
  scala_io_BytePickle$Def$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction0: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_BytePickle$Def$.prototype.$classData = ScalaJS.data.scala_io_BytePickle$Def$;
ScalaJS.moduleInstances.scala_io_BytePickle$Def = undefined;
ScalaJS.modules.scala_io_BytePickle$Def = (function() {
  if ((!ScalaJS.moduleInstances.scala_io_BytePickle$Def)) {
    ScalaJS.moduleInstances.scala_io_BytePickle$Def = new ScalaJS.c.scala_io_BytePickle$Def$().init___()
  };
  return ScalaJS.moduleInstances.scala_io_BytePickle$Def
});
//@ sourceMappingURL=BytePickle$Def$.js.map
