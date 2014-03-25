/** @constructor */
ScalaJS.c.scala_concurrent_ExecutionContext$Implicits$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.global$1 = null;
  this.bitmap$0$1 = false
});
ScalaJS.c.scala_concurrent_ExecutionContext$Implicits$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_ExecutionContext$Implicits$.prototype.constructor = ScalaJS.c.scala_concurrent_ExecutionContext$Implicits$;
ScalaJS.c.scala_concurrent_ExecutionContext$Implicits$.prototype.global$lzycompute__p1__Lscala_concurrent_ExecutionContextExecutor = (function() {
  if ((!this.bitmap$0$1)) {
    this.global$1 = ScalaJS.modules.scala_concurrent_impl_ExecutionContextImpl().fromExecutor__Ljava_util_concurrent_Executor__Lscala_Function1__Lscala_concurrent_impl_ExecutionContextImpl(null, ScalaJS.modules.scala_concurrent_impl_ExecutionContextImpl().fromExecutor$default$2__Lscala_Function1());
    this.bitmap$0$1 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.global$1
});
ScalaJS.c.scala_concurrent_ExecutionContext$Implicits$.prototype.global__Lscala_concurrent_ExecutionContextExecutor = (function() {
  if ((!this.bitmap$0$1)) {
    return this.global$lzycompute__p1__Lscala_concurrent_ExecutionContextExecutor()
  } else {
    return this.global$1
  }
});
ScalaJS.c.scala_concurrent_ExecutionContext$Implicits$.prototype.global__ = (function() {
  return this.global__Lscala_concurrent_ExecutionContextExecutor()
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_ExecutionContext$Implicits$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_ExecutionContext$Implicits$.prototype = ScalaJS.c.scala_concurrent_ExecutionContext$Implicits$.prototype;
ScalaJS.is.scala_concurrent_ExecutionContext$Implicits$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_ExecutionContext$Implicits$)))
});
ScalaJS.as.scala_concurrent_ExecutionContext$Implicits$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_ExecutionContext$Implicits$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.ExecutionContext$Implicits")
  }
});
ScalaJS.isArrayOf.scala_concurrent_ExecutionContext$Implicits$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_ExecutionContext$Implicits$)))
});
ScalaJS.asArrayOf.scala_concurrent_ExecutionContext$Implicits$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_ExecutionContext$Implicits$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.ExecutionContext$Implicits;", depth)
  }
});
ScalaJS.data.scala_concurrent_ExecutionContext$Implicits$ = new ScalaJS.ClassTypeData({
  scala_concurrent_ExecutionContext$Implicits$: 0
}, false, "scala.concurrent.ExecutionContext$Implicits$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_ExecutionContext$Implicits$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_ExecutionContext$Implicits$.prototype.$classData = ScalaJS.data.scala_concurrent_ExecutionContext$Implicits$;
ScalaJS.moduleInstances.scala_concurrent_ExecutionContext$Implicits = undefined;
ScalaJS.modules.scala_concurrent_ExecutionContext$Implicits = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_ExecutionContext$Implicits)) {
    ScalaJS.moduleInstances.scala_concurrent_ExecutionContext$Implicits = new ScalaJS.c.scala_concurrent_ExecutionContext$Implicits$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_ExecutionContext$Implicits
});
//@ sourceMappingURL=ExecutionContext$Implicits$.js.map
