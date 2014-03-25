/** @constructor */
ScalaJS.c.scala_concurrent_DelayedLazyVal = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.f$1 = null;
  this.scala$concurrent$DelayedLazyVal$$body$f = null;
  this.scala$concurrent$DelayedLazyVal$$$undisDone$f = false;
  this.complete$1 = null;
  this.bitmap$0$1 = false
});
ScalaJS.c.scala_concurrent_DelayedLazyVal.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_DelayedLazyVal.prototype.constructor = ScalaJS.c.scala_concurrent_DelayedLazyVal;
ScalaJS.c.scala_concurrent_DelayedLazyVal.prototype.complete$lzycompute__p1__O = (function() {
  if ((!this.bitmap$0$1)) {
    this.complete$1 = this.f$1.apply__O();
    this.bitmap$0$1 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.complete$1
});
ScalaJS.c.scala_concurrent_DelayedLazyVal.prototype.complete__p1__O = (function() {
  if ((!this.bitmap$0$1)) {
    return this.complete$lzycompute__p1__O()
  } else {
    return this.complete$1
  }
});
ScalaJS.c.scala_concurrent_DelayedLazyVal.prototype.isDone__Z = (function() {
  return this.scala$concurrent$DelayedLazyVal$$$undisDone$f
});
ScalaJS.c.scala_concurrent_DelayedLazyVal.prototype.apply__O = (function() {
  if (this.isDone__Z()) {
    return this.complete__p1__O()
  } else {
    return this.f$1.apply__O()
  }
});
ScalaJS.c.scala_concurrent_DelayedLazyVal.prototype.init___Lscala_Function0__Lscala_Function0__Lscala_concurrent_ExecutionContext = (function(f, body, exec) {
  this.f$1 = f;
  this.scala$concurrent$DelayedLazyVal$$body$f = body;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.scala$concurrent$DelayedLazyVal$$$undisDone$f = false;
  exec.execute__Ljava_lang_Runnable__V(new ScalaJS.c.scala_concurrent_DelayedLazyVal$$anon$1().init___Lscala_concurrent_DelayedLazyVal(this));
  return this
});
ScalaJS.c.scala_concurrent_DelayedLazyVal.prototype.apply__ = (function() {
  return this.apply__O()
});
ScalaJS.c.scala_concurrent_DelayedLazyVal.prototype.isDone__ = (function() {
  return ScalaJS.bZ(this.isDone__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_DelayedLazyVal = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_DelayedLazyVal.prototype = ScalaJS.c.scala_concurrent_DelayedLazyVal.prototype;
ScalaJS.is.scala_concurrent_DelayedLazyVal = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_DelayedLazyVal)))
});
ScalaJS.as.scala_concurrent_DelayedLazyVal = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_DelayedLazyVal(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.DelayedLazyVal")
  }
});
ScalaJS.isArrayOf.scala_concurrent_DelayedLazyVal = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_DelayedLazyVal)))
});
ScalaJS.asArrayOf.scala_concurrent_DelayedLazyVal = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_DelayedLazyVal(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.DelayedLazyVal;", depth)
  }
});
ScalaJS.data.scala_concurrent_DelayedLazyVal = new ScalaJS.ClassTypeData({
  scala_concurrent_DelayedLazyVal: 0
}, false, "scala.concurrent.DelayedLazyVal", ScalaJS.data.java_lang_Object, {
  scala_concurrent_DelayedLazyVal: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_DelayedLazyVal.prototype.$classData = ScalaJS.data.scala_concurrent_DelayedLazyVal;
//@ sourceMappingURL=DelayedLazyVal.js.map
