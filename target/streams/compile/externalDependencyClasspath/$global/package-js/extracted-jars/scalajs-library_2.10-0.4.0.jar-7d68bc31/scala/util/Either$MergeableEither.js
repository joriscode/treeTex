/** @constructor */
ScalaJS.c.scala_util_Either$MergeableEither = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.x$1 = null
});
ScalaJS.c.scala_util_Either$MergeableEither.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_Either$MergeableEither.prototype.constructor = ScalaJS.c.scala_util_Either$MergeableEither;
ScalaJS.c.scala_util_Either$MergeableEither.prototype.merge__O = (function() {
  var x1 = this.x$1;
  if (ScalaJS.is.scala_util_Left(x1)) {
    var x2 = ScalaJS.as.scala_util_Left(x1);
    var a = x2.a__O();
    return a
  };
  if (ScalaJS.is.scala_util_Right(x1)) {
    var x3 = ScalaJS.as.scala_util_Right(x1);
    var a$2 = x3.b__O();
    return a$2
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_util_Either$MergeableEither.prototype.init___Lscala_util_Either = (function(x) {
  this.x$1 = x;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_util_Either$MergeableEither.prototype.merge__ = (function() {
  return this.merge__O()
});
/** @constructor */
ScalaJS.inheritable.scala_util_Either$MergeableEither = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Either$MergeableEither.prototype = ScalaJS.c.scala_util_Either$MergeableEither.prototype;
ScalaJS.is.scala_util_Either$MergeableEither = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Either$MergeableEither)))
});
ScalaJS.as.scala_util_Either$MergeableEither = (function(obj) {
  if ((ScalaJS.is.scala_util_Either$MergeableEither(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Either$MergeableEither")
  }
});
ScalaJS.isArrayOf.scala_util_Either$MergeableEither = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Either$MergeableEither)))
});
ScalaJS.asArrayOf.scala_util_Either$MergeableEither = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Either$MergeableEither(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Either$MergeableEither;", depth)
  }
});
ScalaJS.data.scala_util_Either$MergeableEither = new ScalaJS.ClassTypeData({
  scala_util_Either$MergeableEither: 0
}, false, "scala.util.Either$MergeableEither", ScalaJS.data.java_lang_Object, {
  scala_util_Either$MergeableEither: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Either$MergeableEither.prototype.$classData = ScalaJS.data.scala_util_Either$MergeableEither;
//@ sourceMappingURL=Either$MergeableEither.js.map
