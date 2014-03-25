/** @constructor */
ScalaJS.c.scala_concurrent_Future$$anonfun$mapTo$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.$$outer$2 = null;
  this.p$11$2 = null;
  this.tag$1$2 = null
});
ScalaJS.c.scala_concurrent_Future$$anonfun$mapTo$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_concurrent_Future$$anonfun$mapTo$1.prototype.constructor = ScalaJS.c.scala_concurrent_Future$$anonfun$mapTo$1;
ScalaJS.c.scala_concurrent_Future$$anonfun$mapTo$1.prototype.apply__Lscala_util_Try__Lscala_concurrent_Promise = (function(x0$15) {
  var x1 = x0$15;
  if (ScalaJS.is.scala_util_Failure(x1)) {
    var x3 = ScalaJS.as.scala_util_Failure(x1);
    return this.p$11$2.complete__Lscala_util_Try__Lscala_concurrent_Promise(x3)
  };
  if (ScalaJS.is.scala_util_Success(x1)) {
    var x2 = ScalaJS.as.scala_util_Success(x1);
    var t = x2.value__O();
    return this.p$11$2.complete__Lscala_util_Try__Lscala_concurrent_Promise(this.liftedTree1$1__p2__O__Lscala_util_Try(t))
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_concurrent_Future$$anonfun$mapTo$1.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_util_Try__Lscala_concurrent_Promise(ScalaJS.as.scala_util_Try(v1))
});
ScalaJS.c.scala_concurrent_Future$$anonfun$mapTo$1.prototype.liftedTree1$1__p2__O__Lscala_util_Try = (function(t$1) {
  try {
    return new ScalaJS.c.scala_util_Success().init___O(ScalaJS.impls.scala_concurrent_Future$class__boxedType$1__Lscala_concurrent_Future__Ljava_lang_Class__Ljava_lang_Class(this.$$outer$2, this.tag$1$2.runtimeClass__Ljava_lang_Class()).cast__O__O(t$1))
  } catch ($jsexc$) {
    if (ScalaJS.is.java_lang_ClassCastException($jsexc$)) {
      var e = $jsexc$;
      return new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(e)
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_concurrent_Future$$anonfun$mapTo$1.prototype.init___Lscala_concurrent_Future__Lscala_concurrent_Promise__Lscala_reflect_ClassTag = (function($$outer, p$11, tag$1) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.p$11$2 = p$11;
  this.tag$1$2 = tag$1;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_concurrent_Future$$anonfun$mapTo$1.prototype.apply__Lscala_util_Try__ = (function(x0$15) {
  return this.apply__Lscala_util_Try__Lscala_concurrent_Promise(x0$15)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_Future$$anonfun$mapTo$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_Future$$anonfun$mapTo$1.prototype = ScalaJS.c.scala_concurrent_Future$$anonfun$mapTo$1.prototype;
ScalaJS.is.scala_concurrent_Future$$anonfun$mapTo$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Future$$anonfun$mapTo$1)))
});
ScalaJS.as.scala_concurrent_Future$$anonfun$mapTo$1 = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Future$$anonfun$mapTo$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Future$$anonfun$mapTo$1")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Future$$anonfun$mapTo$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Future$$anonfun$mapTo$1)))
});
ScalaJS.asArrayOf.scala_concurrent_Future$$anonfun$mapTo$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Future$$anonfun$mapTo$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Future$$anonfun$mapTo$1;", depth)
  }
});
ScalaJS.data.scala_concurrent_Future$$anonfun$mapTo$1 = new ScalaJS.ClassTypeData({
  scala_concurrent_Future$$anonfun$mapTo$1: 0
}, false, "scala.concurrent.Future$$anonfun$mapTo$1", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_concurrent_Future$$anonfun$mapTo$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_Future$$anonfun$mapTo$1.prototype.$classData = ScalaJS.data.scala_concurrent_Future$$anonfun$mapTo$1;
//@ sourceMappingURL=Future$$anonfun$mapTo$1.js.map
