/** @constructor */
ScalaJS.c.scala_math_Equiv$$anon$3 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.cmp$1$1 = null
});
ScalaJS.c.scala_math_Equiv$$anon$3.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Equiv$$anon$3.prototype.constructor = ScalaJS.c.scala_math_Equiv$$anon$3;
ScalaJS.c.scala_math_Equiv$$anon$3.prototype.equiv__O__O__Z = (function(x$2, y$2) {
  return (this.cmp$1$1.compare__O__O__I(x$2, y$2) === 0)
});
ScalaJS.c.scala_math_Equiv$$anon$3.prototype.init___Ljava_util_Comparator = (function(cmp$1) {
  this.cmp$1$1 = cmp$1;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_math_Equiv$$anon$3.prototype.equiv__O__O__ = (function(x, y) {
  return ScalaJS.bZ(this.equiv__O__O__Z(x, y))
});
/** @constructor */
ScalaJS.inheritable.scala_math_Equiv$$anon$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Equiv$$anon$3.prototype = ScalaJS.c.scala_math_Equiv$$anon$3.prototype;
ScalaJS.is.scala_math_Equiv$$anon$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Equiv$$anon$3)))
});
ScalaJS.as.scala_math_Equiv$$anon$3 = (function(obj) {
  if ((ScalaJS.is.scala_math_Equiv$$anon$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Equiv$$anon$3")
  }
});
ScalaJS.isArrayOf.scala_math_Equiv$$anon$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Equiv$$anon$3)))
});
ScalaJS.asArrayOf.scala_math_Equiv$$anon$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Equiv$$anon$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Equiv$$anon$3;", depth)
  }
});
ScalaJS.data.scala_math_Equiv$$anon$3 = new ScalaJS.ClassTypeData({
  scala_math_Equiv$$anon$3: 0
}, false, "scala.math.Equiv$$anon$3", ScalaJS.data.java_lang_Object, {
  scala_math_Equiv$$anon$3: 1,
  scala_math_Equiv: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Equiv$$anon$3.prototype.$classData = ScalaJS.data.scala_math_Equiv$$anon$3;
//@ sourceMappingURL=Equiv$$anon$3.js.map
