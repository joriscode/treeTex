/** @constructor */
ScalaJS.c.scala_util_Success = (function() {
  ScalaJS.c.scala_util_Try.call(this);
  this.value$2 = null
});
ScalaJS.c.scala_util_Success.prototype = new ScalaJS.inheritable.scala_util_Try();
ScalaJS.c.scala_util_Success.prototype.constructor = ScalaJS.c.scala_util_Success;
ScalaJS.c.scala_util_Success.prototype.value__O = (function() {
  return this.value$2
});
ScalaJS.c.scala_util_Success.prototype.isFailure__Z = (function() {
  return false
});
ScalaJS.c.scala_util_Success.prototype.isSuccess__Z = (function() {
  return true
});
ScalaJS.c.scala_util_Success.prototype.recoverWith__Lscala_PartialFunction__Lscala_util_Try = (function(f) {
  return this
});
ScalaJS.c.scala_util_Success.prototype.get__O = (function() {
  return this.value__O()
});
ScalaJS.c.scala_util_Success.prototype.flatMap__Lscala_Function1__Lscala_util_Try = (function(f) {
  try {
    return ScalaJS.as.scala_util_Try(f.apply__O__O(this.value__O()))
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    var ex6 = $jsexc$;
    var x4 = ex6;
    var o11 = ScalaJS.modules.scala_util_control_NonFatal().unapply__Ljava_lang_Throwable__Lscala_Option(x4);
    if ((!o11.isEmpty__Z())) {
      var e = ScalaJS.as.java_lang_Throwable(o11.get__O());
      return new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(e)
    };
    throw ScalaJS.unwrapJavaScriptException(ex6)
  }
});
ScalaJS.c.scala_util_Success.prototype.flatten__Lscala_Predef$$less$colon$less__Lscala_util_Try = (function(ev) {
  return ScalaJS.as.scala_util_Try(ev.apply__O__O(this.value__O()))
});
ScalaJS.c.scala_util_Success.prototype.foreach__Lscala_Function1__V = (function(f) {
  f.apply__O__O(this.value__O())
});
ScalaJS.c.scala_util_Success.prototype.map__Lscala_Function1__Lscala_util_Try = (function(f) {
  return ScalaJS.modules.scala_util_Try().apply__Lscala_Function0__Lscala_util_Try(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, f$1) {
    return (function() {
      return f$1.apply__O__O(arg$outer.value__O())
    })
  })(this, f)))
});
ScalaJS.c.scala_util_Success.prototype.filter__Lscala_Function1__Lscala_util_Try = (function(p) {
  try {
    if (ScalaJS.uZ(p.apply__O__O(this.value__O()))) {
      return this
    } else {
      return new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(new ScalaJS.c.java_util_NoSuchElementException().init___T(("Predicate does not hold for " + this.value__O())))
    }
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    var ex6 = $jsexc$;
    var x4 = ex6;
    var o11 = ScalaJS.modules.scala_util_control_NonFatal().unapply__Ljava_lang_Throwable__Lscala_Option(x4);
    if ((!o11.isEmpty__Z())) {
      var e = ScalaJS.as.java_lang_Throwable(o11.get__O());
      return new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(e)
    };
    throw ScalaJS.unwrapJavaScriptException(ex6)
  }
});
ScalaJS.c.scala_util_Success.prototype.recover__Lscala_PartialFunction__Lscala_util_Try = (function(rescueException) {
  return this
});
ScalaJS.c.scala_util_Success.prototype.failed__Lscala_util_Try = (function() {
  return new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("Success.failed"))
});
ScalaJS.c.scala_util_Success.prototype.copy__O__Lscala_util_Success = (function(value) {
  return new ScalaJS.c.scala_util_Success().init___O(value)
});
ScalaJS.c.scala_util_Success.prototype.copy$default$1__O = (function() {
  return this.value__O()
});
ScalaJS.c.scala_util_Success.prototype.productPrefix__T = (function() {
  return "Success"
});
ScalaJS.c.scala_util_Success.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_util_Success.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.value__O();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_util_Success.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_util_Success.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_util_Success(x$1)
});
ScalaJS.c.scala_util_Success.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_util_Success.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_util_Success.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_util_Success(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Success$1 = ScalaJS.as.scala_util_Success(x$1);
      return ScalaJS.anyEqEq(this.value__O(), Success$1.value__O())
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_util_Success.prototype.init___O = (function(value) {
  this.value$2 = value;
  ScalaJS.c.scala_util_Try.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_util_Success.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_util_Success.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_Success.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_util_Success.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_util_Success.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_util_Success.prototype.copy__O__ = (function(value) {
  return this.copy__O__Lscala_util_Success(value)
});
ScalaJS.c.scala_util_Success.prototype.value__ = (function() {
  return this.value__O()
});
/** @constructor */
ScalaJS.inheritable.scala_util_Success = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Success.prototype = ScalaJS.c.scala_util_Success.prototype;
ScalaJS.is.scala_util_Success = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Success)))
});
ScalaJS.as.scala_util_Success = (function(obj) {
  if ((ScalaJS.is.scala_util_Success(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Success")
  }
});
ScalaJS.isArrayOf.scala_util_Success = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Success)))
});
ScalaJS.asArrayOf.scala_util_Success = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Success(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Success;", depth)
  }
});
ScalaJS.data.scala_util_Success = new ScalaJS.ClassTypeData({
  scala_util_Success: 0
}, false, "scala.util.Success", ScalaJS.data.scala_util_Try, {
  scala_util_Success: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_util_Try: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Success.prototype.$classData = ScalaJS.data.scala_util_Success;
//@ sourceMappingURL=Success.js.map
