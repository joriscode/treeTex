/** @constructor */
ScalaJS.c.scala_util_hashing_ByteswapHashing$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_hashing_ByteswapHashing$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_hashing_ByteswapHashing$.prototype.constructor = ScalaJS.c.scala_util_hashing_ByteswapHashing$;
ScalaJS.c.scala_util_hashing_ByteswapHashing$.prototype.chain__Lscala_util_hashing_Hashing__Lscala_util_hashing_Hashing = (function(h) {
  return new ScalaJS.c.scala_util_hashing_ByteswapHashing$Chained().init___Lscala_util_hashing_Hashing(h)
});
ScalaJS.c.scala_util_hashing_ByteswapHashing$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_util_hashing_ByteswapHashing()
});
ScalaJS.c.scala_util_hashing_ByteswapHashing$.prototype.chain__Lscala_util_hashing_Hashing__ = (function(h) {
  return this.chain__Lscala_util_hashing_Hashing__Lscala_util_hashing_Hashing(h)
});
/** @constructor */
ScalaJS.inheritable.scala_util_hashing_ByteswapHashing$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_hashing_ByteswapHashing$.prototype = ScalaJS.c.scala_util_hashing_ByteswapHashing$.prototype;
ScalaJS.is.scala_util_hashing_ByteswapHashing$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_hashing_ByteswapHashing$)))
});
ScalaJS.as.scala_util_hashing_ByteswapHashing$ = (function(obj) {
  if ((ScalaJS.is.scala_util_hashing_ByteswapHashing$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.hashing.ByteswapHashing")
  }
});
ScalaJS.isArrayOf.scala_util_hashing_ByteswapHashing$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_hashing_ByteswapHashing$)))
});
ScalaJS.asArrayOf.scala_util_hashing_ByteswapHashing$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_hashing_ByteswapHashing$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.hashing.ByteswapHashing;", depth)
  }
});
ScalaJS.data.scala_util_hashing_ByteswapHashing$ = new ScalaJS.ClassTypeData({
  scala_util_hashing_ByteswapHashing$: 0
}, false, "scala.util.hashing.ByteswapHashing$", ScalaJS.data.java_lang_Object, {
  scala_util_hashing_ByteswapHashing$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_hashing_ByteswapHashing$.prototype.$classData = ScalaJS.data.scala_util_hashing_ByteswapHashing$;
ScalaJS.moduleInstances.scala_util_hashing_ByteswapHashing = undefined;
ScalaJS.modules.scala_util_hashing_ByteswapHashing = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_hashing_ByteswapHashing)) {
    ScalaJS.moduleInstances.scala_util_hashing_ByteswapHashing = new ScalaJS.c.scala_util_hashing_ByteswapHashing$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_hashing_ByteswapHashing
});
//@ sourceMappingURL=ByteswapHashing$.js.map
