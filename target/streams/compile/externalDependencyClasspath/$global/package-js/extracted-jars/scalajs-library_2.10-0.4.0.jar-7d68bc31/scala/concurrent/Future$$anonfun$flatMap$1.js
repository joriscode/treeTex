/** @constructor */
ScalaJS.c.scala_concurrent_Future$$anonfun$flatMap$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractFunction1.call(this);
  this.$$outer$2 = null;
  this.p$4$f = null;
  this.f$4$2 = null
});
ScalaJS.c.scala_concurrent_Future$$anonfun$flatMap$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractFunction1();
ScalaJS.c.scala_concurrent_Future$$anonfun$flatMap$1.prototype.constructor = ScalaJS.c.scala_concurrent_Future$$anonfun$flatMap$1;
ScalaJS.c.scala_concurrent_Future$$anonfun$flatMap$1.prototype.apply__Lscala_util_Try__O = (function(x0$7) {
  var x1 = x0$7;
  if (ScalaJS.is.scala_util_Failure(x1)) {
    var x3 = ScalaJS.as.scala_util_Failure(x1);
    return this.p$4$f.complete__Lscala_util_Try__Lscala_concurrent_Promise(x3)
  };
  if (ScalaJS.is.scala_util_Success(x1)) {
    var x2 = ScalaJS.as.scala_util_Success(x1);
    var v = x2.value__O();
    try {
      ScalaJS.as.scala_concurrent_Future(this.f$4$2.apply__O__O(v)).onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
        return (function(x0$8) {
          var x1 = x0$8;
          if (ScalaJS.is.scala_util_Failure(x1)) {
            var x3 = ScalaJS.as.scala_util_Failure(x1);
            return arg$outer.p$4$f.complete__Lscala_util_Try__Lscala_concurrent_Promise(x3)
          };
          if (ScalaJS.is.scala_util_Success(x1)) {
            var x2 = ScalaJS.as.scala_util_Success(x1);
            var v = x2.value__O();
            return arg$outer.p$4$f.success__O__Lscala_concurrent_Promise(v)
          };
          throw new ScalaJS.c.scala_MatchError().init___O(x1)
        })
      })(this)), ScalaJS.impls.scala_concurrent_Future$class__scala$concurrent$Future$$internalExecutor__Lscala_concurrent_Future__Lscala_concurrent_ExecutionContext(this.$$outer$2));
      return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    } catch ($jsexc$) {
      $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
      var ex6 = $jsexc$;
      var x4 = ex6;
      var o11 = ScalaJS.modules.scala_util_control_NonFatal().unapply__Ljava_lang_Throwable__Lscala_Option(x4);
      if ((!o11.isEmpty__Z())) {
        var t = ScalaJS.as.java_lang_Throwable(o11.get__O());
        return this.p$4$f.failure__Ljava_lang_Throwable__Lscala_concurrent_Promise(t)
      };
      throw ScalaJS.unwrapJavaScriptException(ex6)
    }
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_concurrent_Future$$anonfun$flatMap$1.prototype.apply__O__O = (function(v1) {
  return this.apply__Lscala_util_Try__O(ScalaJS.as.scala_util_Try(v1))
});
ScalaJS.c.scala_concurrent_Future$$anonfun$flatMap$1.prototype.init___Lscala_concurrent_Future__Lscala_concurrent_Promise__Lscala_Function1 = (function($$outer, p$4, f$4) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$2 = $$outer
  };
  this.p$4$f = p$4;
  this.f$4$2 = f$4;
  ScalaJS.c.scala_runtime_AbstractFunction1.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_concurrent_Future$$anonfun$flatMap$1.prototype.apply__Lscala_util_Try__ = (function(x0$7) {
  return this.apply__Lscala_util_Try__O(x0$7)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_Future$$anonfun$flatMap$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_Future$$anonfun$flatMap$1.prototype = ScalaJS.c.scala_concurrent_Future$$anonfun$flatMap$1.prototype;
ScalaJS.is.scala_concurrent_Future$$anonfun$flatMap$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Future$$anonfun$flatMap$1)))
});
ScalaJS.as.scala_concurrent_Future$$anonfun$flatMap$1 = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Future$$anonfun$flatMap$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Future$$anonfun$flatMap$1")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Future$$anonfun$flatMap$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Future$$anonfun$flatMap$1)))
});
ScalaJS.asArrayOf.scala_concurrent_Future$$anonfun$flatMap$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Future$$anonfun$flatMap$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Future$$anonfun$flatMap$1;", depth)
  }
});
ScalaJS.data.scala_concurrent_Future$$anonfun$flatMap$1 = new ScalaJS.ClassTypeData({
  scala_concurrent_Future$$anonfun$flatMap$1: 0
}, false, "scala.concurrent.Future$$anonfun$flatMap$1", ScalaJS.data.scala_runtime_AbstractFunction1, {
  scala_concurrent_Future$$anonfun$flatMap$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractFunction1: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_Future$$anonfun$flatMap$1.prototype.$classData = ScalaJS.data.scala_concurrent_Future$$anonfun$flatMap$1;
//@ sourceMappingURL=Future$$anonfun$flatMap$1.js.map
