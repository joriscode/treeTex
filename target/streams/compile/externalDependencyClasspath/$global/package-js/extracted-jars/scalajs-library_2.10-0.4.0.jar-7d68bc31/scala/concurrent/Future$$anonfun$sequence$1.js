/** @constructor */
ScalaJS.c.scala_concurrent_Future$$anonfun$sequence$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction2.call(this);
  this.executor$1$f = null
});
ScalaJS.c.scala_concurrent_Future$$anonfun$sequence$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction2();
ScalaJS.c.scala_concurrent_Future$$anonfun$sequence$1.prototype.constructor = ScalaJS.c.scala_concurrent_Future$$anonfun$sequence$1;
ScalaJS.c.scala_concurrent_Future$$anonfun$sequence$1.prototype.apply__Lscala_concurrent_Future__O__Lscala_concurrent_Future = (function(fr, fa) {
  return fr.flatMap__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, fa$1) {
    return (function(r) {
      return ScalaJS.as.scala_concurrent_Future(fa$1).map__Lscala_Function1__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(new ScalaJS.c.scala_concurrent_Future$$anonfun$sequence$1$$anonfun$apply$4$$anonfun$apply$5().init___Lscala_concurrent_Future$$anonfun$sequence$1$$anonfun$apply$4__Lscala_collection_mutable_Builder(this, r), arg$outer.executor$1$f)
    })
  })(this, fa)), this.executor$1$f)
});
ScalaJS.c.scala_concurrent_Future$$anonfun$sequence$1.prototype.apply__O__O__O = (function(v1, v2) {
  return this.apply__Lscala_concurrent_Future__O__Lscala_concurrent_Future(ScalaJS.as.scala_concurrent_Future(v1), v2)
});
ScalaJS.c.scala_concurrent_Future$$anonfun$sequence$1.prototype.init___Lscala_concurrent_ExecutionContext = (function(executor$1) {
  this.executor$1$f = executor$1;
  ScalaJS.c.scala_runtime_AbstractFunction2.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_concurrent_Future$$anonfun$sequence$1.prototype.apply__Lscala_concurrent_Future__O__ = (function(fr, fa) {
  return this.apply__Lscala_concurrent_Future__O__Lscala_concurrent_Future(fr, fa)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_Future$$anonfun$sequence$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_Future$$anonfun$sequence$1.prototype = ScalaJS.c.scala_concurrent_Future$$anonfun$sequence$1.prototype;
ScalaJS.is.scala_concurrent_Future$$anonfun$sequence$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Future$$anonfun$sequence$1)))
});
ScalaJS.as.scala_concurrent_Future$$anonfun$sequence$1 = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Future$$anonfun$sequence$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Future$$anonfun$sequence$1")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Future$$anonfun$sequence$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Future$$anonfun$sequence$1)))
});
ScalaJS.asArrayOf.scala_concurrent_Future$$anonfun$sequence$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Future$$anonfun$sequence$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Future$$anonfun$sequence$1;", depth)
  }
});
ScalaJS.data.scala_concurrent_Future$$anonfun$sequence$1 = new ScalaJS.ClassTypeData({
  scala_concurrent_Future$$anonfun$sequence$1: 0
}, false, "scala.concurrent.Future$$anonfun$sequence$1", ScalaJS.data.scala_runtime_AbstractFunction2, {
  scala_concurrent_Future$$anonfun$sequence$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction2: 1,
  scala_Function2: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_Future$$anonfun$sequence$1.prototype.$classData = ScalaJS.data.scala_concurrent_Future$$anonfun$sequence$1;
//@ sourceMappingURL=Future$$anonfun$sequence$1.js.map
