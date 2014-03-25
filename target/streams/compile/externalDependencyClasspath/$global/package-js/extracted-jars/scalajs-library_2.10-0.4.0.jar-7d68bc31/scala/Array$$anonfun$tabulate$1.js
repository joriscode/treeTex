/** @constructor */
ScalaJS.c.scala_Array$$anonfun$tabulate$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.n2$6$2 = 0;
  this.f$4$f = null;
  this.evidence$15$1$2 = null
});
ScalaJS.c.scala_Array$$anonfun$tabulate$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_Array$$anonfun$tabulate$1.prototype.constructor = ScalaJS.c.scala_Array$$anonfun$tabulate$1;
ScalaJS.c.scala_Array$$anonfun$tabulate$1.prototype.apply__I__O = (function(i1) {
  return ScalaJS.modules.scala_Array().tabulate__I__Lscala_Function1__Lscala_reflect_ClassTag__O(this.n2$6$2, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, i1$1) {
    return (function(x$9) {
      x$9 = ScalaJS.uI(x$9);
      return arg$outer.f$4$f.apply__O__O__O(ScalaJS.bI(i1$1), ScalaJS.bI(x$9))
    })
  })(this, i1)), this.evidence$15$1$2)
});
ScalaJS.c.scala_Array$$anonfun$tabulate$1.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_Array$$anonfun$tabulate$1.prototype.init___I__Lscala_Function2__Lscala_reflect_ClassTag = (function(n2$6, f$4, evidence$15$1) {
  this.n2$6$2 = n2$6;
  this.f$4$f = f$4;
  this.evidence$15$1$2 = evidence$15$1;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_Array$$anonfun$tabulate$1.prototype.apply__I__ = (function(i1) {
  return this.apply__I__O(i1)
});
/** @constructor */
ScalaJS.inheritable.scala_Array$$anonfun$tabulate$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Array$$anonfun$tabulate$1.prototype = ScalaJS.c.scala_Array$$anonfun$tabulate$1.prototype;
ScalaJS.is.scala_Array$$anonfun$tabulate$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Array$$anonfun$tabulate$1)))
});
ScalaJS.as.scala_Array$$anonfun$tabulate$1 = (function(obj) {
  if ((ScalaJS.is.scala_Array$$anonfun$tabulate$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Array$$anonfun$tabulate$1")
  }
});
ScalaJS.isArrayOf.scala_Array$$anonfun$tabulate$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Array$$anonfun$tabulate$1)))
});
ScalaJS.asArrayOf.scala_Array$$anonfun$tabulate$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Array$$anonfun$tabulate$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Array$$anonfun$tabulate$1;", depth)
  }
});
ScalaJS.data.scala_Array$$anonfun$tabulate$1 = new ScalaJS.ClassTypeData({
  scala_Array$$anonfun$tabulate$1: 0
}, false, "scala.Array$$anonfun$tabulate$1", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_Array$$anonfun$tabulate$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Array$$anonfun$tabulate$1.prototype.$classData = ScalaJS.data.scala_Array$$anonfun$tabulate$1;
//@ sourceMappingURL=Array$$anonfun$tabulate$1.js.map
