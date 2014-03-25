/** @constructor */
ScalaJS.c.scala_Array$$anonfun$tabulate$2 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.n2$5$2 = 0;
  this.n3$4$2 = 0;
  this.f$3$f = null;
  this.evidence$16$1$2 = null
});
ScalaJS.c.scala_Array$$anonfun$tabulate$2.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_Array$$anonfun$tabulate$2.prototype.constructor = ScalaJS.c.scala_Array$$anonfun$tabulate$2;
ScalaJS.c.scala_Array$$anonfun$tabulate$2.prototype.apply__I__AO = (function(i1$2) {
  return ScalaJS.modules.scala_Array().tabulate__I__I__Lscala_Function2__Lscala_reflect_ClassTag__AO(this.n2$5$2, this.n3$4$2, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(arg$outer, i1$2) {
    return (function(x$10, x$11) {
      x$10 = ScalaJS.uI(x$10);
      x$11 = ScalaJS.uI(x$11);
      return arg$outer.f$3$f.apply__O__O__O__O(ScalaJS.bI(i1$2), ScalaJS.bI(x$10), ScalaJS.bI(x$11))
    })
  })(this, i1$2)), this.evidence$16$1$2)
});
ScalaJS.c.scala_Array$$anonfun$tabulate$2.prototype.apply__O__O = (function(v1) {
  return this.apply__I__AO(ScalaJS.uI(v1))
});
ScalaJS.c.scala_Array$$anonfun$tabulate$2.prototype.init___I__I__Lscala_Function3__Lscala_reflect_ClassTag = (function(n2$5, n3$4, f$3, evidence$16$1) {
  this.n2$5$2 = n2$5;
  this.n3$4$2 = n3$4;
  this.f$3$f = f$3;
  this.evidence$16$1$2 = evidence$16$1;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_Array$$anonfun$tabulate$2.prototype.apply__I__ = (function(i1) {
  return this.apply__I__AO(i1)
});
/** @constructor */
ScalaJS.inheritable.scala_Array$$anonfun$tabulate$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Array$$anonfun$tabulate$2.prototype = ScalaJS.c.scala_Array$$anonfun$tabulate$2.prototype;
ScalaJS.is.scala_Array$$anonfun$tabulate$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Array$$anonfun$tabulate$2)))
});
ScalaJS.as.scala_Array$$anonfun$tabulate$2 = (function(obj) {
  if ((ScalaJS.is.scala_Array$$anonfun$tabulate$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Array$$anonfun$tabulate$2")
  }
});
ScalaJS.isArrayOf.scala_Array$$anonfun$tabulate$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Array$$anonfun$tabulate$2)))
});
ScalaJS.asArrayOf.scala_Array$$anonfun$tabulate$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Array$$anonfun$tabulate$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Array$$anonfun$tabulate$2;", depth)
  }
});
ScalaJS.data.scala_Array$$anonfun$tabulate$2 = new ScalaJS.ClassTypeData({
  scala_Array$$anonfun$tabulate$2: 0
}, false, "scala.Array$$anonfun$tabulate$2", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_Array$$anonfun$tabulate$2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Array$$anonfun$tabulate$2.prototype.$classData = ScalaJS.data.scala_Array$$anonfun$tabulate$2;
//@ sourceMappingURL=Array$$anonfun$tabulate$2.js.map
