/** @constructor */
ScalaJS.c.scala_util_Either$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_Either$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_Either$.prototype.constructor = ScalaJS.c.scala_util_Either$;
ScalaJS.c.scala_util_Either$.prototype.MergeableEither__Lscala_util_Either__Lscala_util_Either$MergeableEither = (function(x) {
  return new ScalaJS.c.scala_util_Either$MergeableEither().init___Lscala_util_Either(x)
});
ScalaJS.c.scala_util_Either$.prototype.either2mergeable__Lscala_util_Either__Lscala_util_Either$MergeableEither = (function(x) {
  return new ScalaJS.c.scala_util_Either$MergeableEither().init___Lscala_util_Either(x)
});
ScalaJS.c.scala_util_Either$.prototype.cond__Z__Lscala_Function0__Lscala_Function0__Lscala_util_Either = (function(test, right, left) {
  if (test) {
    return new ScalaJS.c.scala_util_Right().init___O(right.apply__O())
  } else {
    return new ScalaJS.c.scala_util_Left().init___O(left.apply__O())
  }
});
ScalaJS.c.scala_util_Either$.prototype.cond__Z__Lscala_Function0__Lscala_Function0__ = (function(test, right, left) {
  return this.cond__Z__Lscala_Function0__Lscala_Function0__Lscala_util_Either(test, right, left)
});
ScalaJS.c.scala_util_Either$.prototype.either2mergeable__Lscala_util_Either__ = (function(x) {
  return this.either2mergeable__Lscala_util_Either__Lscala_util_Either$MergeableEither(x)
});
ScalaJS.c.scala_util_Either$.prototype.MergeableEither__Lscala_util_Either__ = (function(x$2) {
  return this.MergeableEither__Lscala_util_Either__Lscala_util_Either$MergeableEither(x$2)
});
/** @constructor */
ScalaJS.inheritable.scala_util_Either$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Either$.prototype = ScalaJS.c.scala_util_Either$.prototype;
ScalaJS.is.scala_util_Either$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Either$)))
});
ScalaJS.as.scala_util_Either$ = (function(obj) {
  if ((ScalaJS.is.scala_util_Either$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Either")
  }
});
ScalaJS.isArrayOf.scala_util_Either$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Either$)))
});
ScalaJS.asArrayOf.scala_util_Either$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Either$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Either;", depth)
  }
});
ScalaJS.data.scala_util_Either$ = new ScalaJS.ClassTypeData({
  scala_util_Either$: 0
}, false, "scala.util.Either$", ScalaJS.data.java_lang_Object, {
  scala_util_Either$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Either$.prototype.$classData = ScalaJS.data.scala_util_Either$;
ScalaJS.moduleInstances.scala_util_Either = undefined;
ScalaJS.modules.scala_util_Either = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_Either)) {
    ScalaJS.moduleInstances.scala_util_Either = new ScalaJS.c.scala_util_Either$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_Either
});
//@ sourceMappingURL=Either$.js.map
