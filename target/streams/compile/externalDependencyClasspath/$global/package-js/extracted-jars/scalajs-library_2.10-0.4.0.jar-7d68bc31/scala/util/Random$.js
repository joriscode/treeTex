/** @constructor */
ScalaJS.c.scala_util_Random$ = (function() {
  ScalaJS.c.scala_util_Random.call(this)
});
ScalaJS.c.scala_util_Random$.prototype = new ScalaJS.inheritable.scala_util_Random();
ScalaJS.c.scala_util_Random$.prototype.constructor = ScalaJS.c.scala_util_Random$;
ScalaJS.c.scala_util_Random$.prototype.javaRandomToRandom__Ljava_util_Random__Lscala_util_Random = (function(r) {
  return new ScalaJS.c.scala_util_Random().init___Ljava_util_Random(r)
});
ScalaJS.c.scala_util_Random$.prototype.javaRandomToRandom__Ljava_util_Random__ = (function(r) {
  return this.javaRandomToRandom__Ljava_util_Random__Lscala_util_Random(r)
});
/** @constructor */
ScalaJS.inheritable.scala_util_Random$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Random$.prototype = ScalaJS.c.scala_util_Random$.prototype;
ScalaJS.is.scala_util_Random$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Random$)))
});
ScalaJS.as.scala_util_Random$ = (function(obj) {
  if ((ScalaJS.is.scala_util_Random$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Random")
  }
});
ScalaJS.isArrayOf.scala_util_Random$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Random$)))
});
ScalaJS.asArrayOf.scala_util_Random$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Random$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Random;", depth)
  }
});
ScalaJS.data.scala_util_Random$ = new ScalaJS.ClassTypeData({
  scala_util_Random$: 0
}, false, "scala.util.Random$", ScalaJS.data.scala_util_Random, {
  scala_util_Random$: 1,
  scala_util_Random: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Random$.prototype.$classData = ScalaJS.data.scala_util_Random$;
ScalaJS.moduleInstances.scala_util_Random = undefined;
ScalaJS.modules.scala_util_Random = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_Random)) {
    ScalaJS.moduleInstances.scala_util_Random = new ScalaJS.c.scala_util_Random$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_Random
});
//@ sourceMappingURL=Random$.js.map
