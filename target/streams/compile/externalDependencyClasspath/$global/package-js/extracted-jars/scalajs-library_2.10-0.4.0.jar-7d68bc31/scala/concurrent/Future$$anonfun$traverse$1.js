/** @constructor */
ScalaJS.c.scala_concurrent_Future$$anonfun$traverse$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this);
  this.fn$1$2 = null;
  this.executor$4$f = null
});
ScalaJS.c.scala_concurrent_Future$$anonfun$traverse$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.scala_concurrent_Future$$anonfun$traverse$1.prototype.constructor = ScalaJS.c.scala_concurrent_Future$$anonfun$traverse$1;
ScalaJS.c.scala_concurrent_Future$$anonfun$traverse$1.prototype.apply__Lscala_concurrent_Future__O__Lscala_concurrent_Future = (function(fr, a) {
  var fb = ScalaJS.as.scala_concurrent_Future(this.fn$1$2.apply__O__O(a));
  return fr.flatMap__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, fb$1) {
    return (function(r) {
      return fb$1.map__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(new ScalaJS.c.scala_concurrent_Future$$anonfun$traverse$1$$anonfun$apply$6$$anonfun$apply$7().init___Lscala_concurrent_Future$$anonfun$traverse$1$$anonfun$apply$6__Lscala_collection_mutable_Builder(this, r), arg$outer.executor$4$f)
    })
  })(this, fb)), this.executor$4$f)
});
ScalaJS.c.scala_concurrent_Future$$anonfun$traverse$1.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__Lscala_concurrent_Future__O__Lscala_concurrent_Future(ScalaJS.as.scala_concurrent_Future(v1), v2)
});
ScalaJS.c.scala_concurrent_Future$$anonfun$traverse$1.prototype.init___Lscala_Function1__Lscala_concurrent_ExecutionContext = (function(fn$1, executor$4) {
  this.fn$1$2 = fn$1;
  this.executor$4$f = executor$4;
  ScalaJS.c.scala_runtime_AbstractFunction2.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_concurrent_Future$$anonfun$traverse$1.prototype.apply__Lscala_concurrent_Future__O__ = (function(fr, a) {
  return this.apply__Lscala_concurrent_Future__O__Lscala_concurrent_Future(fr, a)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_Future$$anonfun$traverse$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_Future$$anonfun$traverse$1.prototype = ScalaJS.c.scala_concurrent_Future$$anonfun$traverse$1.prototype;
ScalaJS.is.scala_concurrent_Future$$anonfun$traverse$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Future$$anonfun$traverse$1)))
});
ScalaJS.as.scala_concurrent_Future$$anonfun$traverse$1 = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Future$$anonfun$traverse$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Future$$anonfun$traverse$1")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Future$$anonfun$traverse$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Future$$anonfun$traverse$1)))
});
ScalaJS.asArrayOf.scala_concurrent_Future$$anonfun$traverse$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Future$$anonfun$traverse$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Future$$anonfun$traverse$1;", depth)
  }
});
ScalaJS.data.scala_concurrent_Future$$anonfun$traverse$1 = new ScalaJS.ClassTypeData({
  scala_concurrent_Future$$anonfun$traverse$1: 0
}, false, "scala.concurrent.Future$$anonfun$traverse$1", ScalaJS.data.scala_runtime_AbstractFunction2, {
  scala_concurrent_Future$$anonfun$traverse$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_Future$$anonfun$traverse$1.prototype.$classData = ScalaJS.data.scala_concurrent_Future$$anonfun$traverse$1;
//@ sourceMappingURL=Future$$anonfun$traverse$1.js.map
