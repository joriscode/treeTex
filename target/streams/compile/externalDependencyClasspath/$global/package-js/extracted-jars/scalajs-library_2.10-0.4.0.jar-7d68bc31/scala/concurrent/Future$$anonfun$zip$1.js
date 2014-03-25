/** @constructor */
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.$$outer$2 = null;
  this.p$9$f = null;
  this.that$1$2 = null
});
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1.prototype.constructor = ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1;
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1.prototype.apply__Lscala_util_Try__O = (function(x0$13) {
  var x1 = x0$13;
  if (ScalaJS.is.scala_util_Failure(x1)) {
    var x3 = ScalaJS.as.scala_util_Failure(x1);
    return this.p$9$f.complete__Lscala_util_Try__Lscala_concurrent_Promise(x3)
  };
  if (ScalaJS.is.scala_util_Success(x1)) {
    var x2$3 = ScalaJS.as.scala_util_Success(x1);
    var r = x2$3.value__O();
    this.that$1$2.onSuccess__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$1().init___Lscala_concurrent_Future$$anonfun$zip$1__O(this, r), ScalaJS.impls.scala_concurrent_Future$class__scala$concurrent$Future$$internalExecutor__Lscala_concurrent_Future__Lscala_concurrent_ExecutionContext(this.$$outer$2));
    this.that$1$2.onFailure__Lscala_PartialFunction__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1$$anonfun$apply$2().init___Lscala_concurrent_Future$$anonfun$zip$1(this), ScalaJS.impls.scala_concurrent_Future$class__scala$concurrent$Future$$internalExecutor__Lscala_concurrent_Future__Lscala_concurrent_ExecutionContext(this.$$outer$2));
    return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_util_Try__O(ScalaJS.as.scala_util_Try(v1))
});
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1.prototype.init___Lscala_concurrent_Future__Lscala_concurrent_Promise__Lscala_concurrent_Future = (function($$outer, p$9, that$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.p$9$f = p$9;
  this.that$1$2 = that$1;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1.prototype.apply__Lscala_util_Try__ = (function(x0$13) {
  return this.apply__Lscala_util_Try__O(x0$13)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_Future$$anonfun$zip$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_Future$$anonfun$zip$1.prototype = ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1.prototype;
ScalaJS.is.scala_concurrent_Future$$anonfun$zip$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Future$$anonfun$zip$1)))
});
ScalaJS.as.scala_concurrent_Future$$anonfun$zip$1 = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Future$$anonfun$zip$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Future$$anonfun$zip$1")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Future$$anonfun$zip$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Future$$anonfun$zip$1)))
});
ScalaJS.asArrayOf.scala_concurrent_Future$$anonfun$zip$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Future$$anonfun$zip$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Future$$anonfun$zip$1;", depth)
  }
});
ScalaJS.data.scala_concurrent_Future$$anonfun$zip$1 = new ScalaJS.ClassTypeData({
  scala_concurrent_Future$$anonfun$zip$1: 0
}, false, "scala.concurrent.Future$$anonfun$zip$1", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_concurrent_Future$$anonfun$zip$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_Future$$anonfun$zip$1.prototype.$classData = ScalaJS.data.scala_concurrent_Future$$anonfun$zip$1;
//@ sourceMappingURL=Future$$anonfun$zip$1.js.map
