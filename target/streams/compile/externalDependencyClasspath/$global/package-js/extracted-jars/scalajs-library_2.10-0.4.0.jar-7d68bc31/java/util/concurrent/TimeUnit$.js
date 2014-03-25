/** @constructor */
ScalaJS.c.java_util_concurrent_TimeUnit$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.NANOSECONDS$1 = null;
  this.MICROSECONDS$1 = null;
  this.MILLISECONDS$1 = null;
  this.SECONDS$1 = null;
  this.MINUTES$1 = null;
  this.HOURS$1 = null;
  this.DAYS$1 = null;
  this.$$undvalues$1 = null;
  this.C0$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.C1$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.C2$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.C3$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.C4$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.C5$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.C6$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.MAX$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long()
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.constructor = ScalaJS.c.java_util_concurrent_TimeUnit$;
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.NANOSECONDS__Ljava_util_concurrent_TimeUnit = (function() {
  return this.NANOSECONDS$1
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.MICROSECONDS__Ljava_util_concurrent_TimeUnit = (function() {
  return this.MICROSECONDS$1
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.MILLISECONDS__Ljava_util_concurrent_TimeUnit = (function() {
  return this.MILLISECONDS$1
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.SECONDS__Ljava_util_concurrent_TimeUnit = (function() {
  return this.SECONDS$1
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.MINUTES__Ljava_util_concurrent_TimeUnit = (function() {
  return this.MINUTES$1
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.HOURS__Ljava_util_concurrent_TimeUnit = (function() {
  return this.HOURS$1
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.DAYS__Ljava_util_concurrent_TimeUnit = (function() {
  return this.DAYS$1
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.C0__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1, 0, 0)
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.C1__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1000, 0, 0)
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.C2__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1000000, 0, 0)
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.C3__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1755648, 238, 0)
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.C4__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(481280, 14305, 0)
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.C5__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(3710976, 858306, 0)
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.C6__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(983040, 3822149, 4)
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.MAX__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 524287)
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.values__ALjava_util_concurrent_TimeUnit = (function() {
  return ScalaJS.asArrayOf.java_util_concurrent_TimeUnit(this.$$undvalues$1.clone__O(), 1)
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.valueOf__T__Ljava_util_concurrent_TimeUnit = (function(name) {
  return ScalaJS.as.java_util_concurrent_TimeUnit(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(this.$$undvalues$1, 1)).find__Lscala_Function1__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(name$1) {
    return (function(x$1) {
      return ScalaJS.bZ(ScalaJS.anyRefEqEq(x$1.name__T(), name$1))
    })
  })(name))).getOrElse__Lscala_Function0__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(name$1) {
    return (function() {
      throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T(("No enum const TimeUnit." + name$1))
    })
  })(name))))
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.x__J__J__J__J = (function(a, b, max) {
  if (a.$$greater__Lscala_scalajs_runtime_Long__Z(max)) {
    return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 524287)
  } else {
    if (a.$$less__Lscala_scalajs_runtime_Long__Z(max.unary$und$minus__Lscala_scalajs_runtime_Long())) {
      return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 524287).unary$und$minus__Lscala_scalajs_runtime_Long()
    } else {
      return a.$$times__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(b)
    }
  }
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.java_util_concurrent_TimeUnit()
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.java_util_concurrent_TimeUnit = this;
  this.NANOSECONDS$1 = new ScalaJS.c.java_util_concurrent_TimeUnit$$anon$1().init___();
  this.MICROSECONDS$1 = new ScalaJS.c.java_util_concurrent_TimeUnit$$anon$2().init___();
  this.MILLISECONDS$1 = new ScalaJS.c.java_util_concurrent_TimeUnit$$anon$3().init___();
  this.SECONDS$1 = new ScalaJS.c.java_util_concurrent_TimeUnit$$anon$4().init___();
  this.MINUTES$1 = new ScalaJS.c.java_util_concurrent_TimeUnit$$anon$5().init___();
  this.HOURS$1 = new ScalaJS.c.java_util_concurrent_TimeUnit$$anon$6().init___();
  this.DAYS$1 = new ScalaJS.c.java_util_concurrent_TimeUnit$$anon$7().init___();
  this.$$undvalues$1 = ScalaJS.asArrayOf.java_util_concurrent_TimeUnit(ScalaJS.modules.scala_Array().apply__Lscala_collection_Seq__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_util_concurrent_TimeUnit.getArrayOf(), [this.NANOSECONDS__Ljava_util_concurrent_TimeUnit(), this.MICROSECONDS__Ljava_util_concurrent_TimeUnit(), this.MILLISECONDS__Ljava_util_concurrent_TimeUnit(), this.SECONDS__Ljava_util_concurrent_TimeUnit(), this.MINUTES__Ljava_util_concurrent_TimeUnit(), this.HOURS__Ljava_util_concurrent_TimeUnit(), this.DAYS__Ljava_util_concurrent_TimeUnit()]), 1)), ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.java_util_concurrent_TimeUnit.getClassOf())), 1);
  return this
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.x__J__J__J__ = (function(a, b, max) {
  return ScalaJS.bJ(this.x__J__J__J__J(a, b, max))
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.valueOf__T__ = (function(name) {
  return this.valueOf__T__Ljava_util_concurrent_TimeUnit(name)
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.values__ = (function() {
  return this.values__ALjava_util_concurrent_TimeUnit()
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.MAX__ = (function() {
  return ScalaJS.bJ(this.MAX__J())
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.C6__ = (function() {
  return ScalaJS.bJ(this.C6__J())
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.C5__ = (function() {
  return ScalaJS.bJ(this.C5__J())
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.C4__ = (function() {
  return ScalaJS.bJ(this.C4__J())
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.C3__ = (function() {
  return ScalaJS.bJ(this.C3__J())
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.C2__ = (function() {
  return ScalaJS.bJ(this.C2__J())
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.C1__ = (function() {
  return ScalaJS.bJ(this.C1__J())
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.C0__ = (function() {
  return ScalaJS.bJ(this.C0__J())
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.DAYS__ = (function() {
  return this.DAYS__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.HOURS__ = (function() {
  return this.HOURS__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.MINUTES__ = (function() {
  return this.MINUTES__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.SECONDS__ = (function() {
  return this.SECONDS__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.MILLISECONDS__ = (function() {
  return this.MILLISECONDS__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.MICROSECONDS__ = (function() {
  return this.MICROSECONDS__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.NANOSECONDS__ = (function() {
  return this.NANOSECONDS__Ljava_util_concurrent_TimeUnit()
});
/** @constructor */
ScalaJS.inheritable.java_util_concurrent_TimeUnit$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_concurrent_TimeUnit$.prototype = ScalaJS.c.java_util_concurrent_TimeUnit$.prototype;
ScalaJS.is.java_util_concurrent_TimeUnit$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_concurrent_TimeUnit$)))
});
ScalaJS.as.java_util_concurrent_TimeUnit$ = (function(obj) {
  if ((ScalaJS.is.java_util_concurrent_TimeUnit$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.concurrent.TimeUnit")
  }
});
ScalaJS.isArrayOf.java_util_concurrent_TimeUnit$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_concurrent_TimeUnit$)))
});
ScalaJS.asArrayOf.java_util_concurrent_TimeUnit$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_concurrent_TimeUnit$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.concurrent.TimeUnit;", depth)
  }
});
ScalaJS.data.java_util_concurrent_TimeUnit$ = new ScalaJS.ClassTypeData({
  java_util_concurrent_TimeUnit$: 0
}, false, "java.util.concurrent.TimeUnit$", ScalaJS.data.java_lang_Object, {
  java_util_concurrent_TimeUnit$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_concurrent_TimeUnit$.prototype.$classData = ScalaJS.data.java_util_concurrent_TimeUnit$;
ScalaJS.moduleInstances.java_util_concurrent_TimeUnit = undefined;
ScalaJS.modules.java_util_concurrent_TimeUnit = (function() {
  if ((!ScalaJS.moduleInstances.java_util_concurrent_TimeUnit)) {
    ScalaJS.moduleInstances.java_util_concurrent_TimeUnit = new ScalaJS.c.java_util_concurrent_TimeUnit$().init___()
  };
  return ScalaJS.moduleInstances.java_util_concurrent_TimeUnit
});
//@ sourceMappingURL=TimeUnit$.js.map
