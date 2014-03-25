/** @constructor */
ScalaJS.c.scala_util_Failure = (function() {
  ScalaJS.c.scala_util_Try.call(this);
  this.exception$2 = null
});
ScalaJS.c.scala_util_Failure.prototype = new ScalaJS.inheritable.scala_util_Try();
ScalaJS.c.scala_util_Failure.prototype.constructor = ScalaJS.c.scala_util_Failure;
ScalaJS.c.scala_util_Failure.prototype.exception__Ljava_lang_Throwable = (function() {
  return this.exception$2
});
ScalaJS.c.scala_util_Failure.prototype.isFailure__Z = (function() {
  return true
});
ScalaJS.c.scala_util_Failure.prototype.isSuccess__Z = (function() {
  return false
});
ScalaJS.c.scala_util_Failure.prototype.recoverWith__Lscala_PartialFunction__Lscala_util_Try = (function(f) {
  try {
    if (f.isDefinedAt__O__Z(this.exception__Ljava_lang_Throwable())) {
      return ScalaJS.as.scala_util_Try(f.apply__O__O(this.exception__Ljava_lang_Throwable()))
    } else {
      return this
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
ScalaJS.c.scala_util_Failure.prototype.get__O = (function() {
  throw ScalaJS.unwrapJavaScriptException(this.exception__Ljava_lang_Throwable())
});
ScalaJS.c.scala_util_Failure.prototype.flatMap__Lscala_Function1__Lscala_util_Try = (function(f) {
  return this
});
ScalaJS.c.scala_util_Failure.prototype.flatten__Lscala_Predef$$less$colon$less__Lscala_util_Try = (function(ev) {
  return this
});
ScalaJS.c.scala_util_Failure.prototype.foreach__Lscala_Function1__V = (function(f) {
  /*<skip>*/
});
ScalaJS.c.scala_util_Failure.prototype.map__Lscala_Function1__Lscala_util_Try = (function(f) {
  return this
});
ScalaJS.c.scala_util_Failure.prototype.filter__Lscala_Function1__Lscala_util_Try = (function(p) {
  return this
});
ScalaJS.c.scala_util_Failure.prototype.recover__Lscala_PartialFunction__Lscala_util_Try = (function(rescueException) {
  try {
    if (rescueException.isDefinedAt__O__Z(this.exception__Ljava_lang_Throwable())) {
      return ScalaJS.modules.scala_util_Try().apply__Lscala_Function0__Lscala_util_Try(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, rescueException$1) {
        return (function() {
          return rescueException$1.apply__O__O(arg$outer.exception__Ljava_lang_Throwable())
        })
      })(this, rescueException)))
    } else {
      return this
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
ScalaJS.c.scala_util_Failure.prototype.failed__Lscala_util_Try = (function() {
  return new ScalaJS.c.scala_util_Success().init___O(this.exception__Ljava_lang_Throwable())
});
ScalaJS.c.scala_util_Failure.prototype.copy__Ljava_lang_Throwable__Lscala_util_Failure = (function(exception) {
  return new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(exception)
});
ScalaJS.c.scala_util_Failure.prototype.copy$default$1__Ljava_lang_Throwable = (function() {
  return this.exception__Ljava_lang_Throwable()
});
ScalaJS.c.scala_util_Failure.prototype.productPrefix__T = (function() {
  return "Failure"
});
ScalaJS.c.scala_util_Failure.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_util_Failure.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.exception__Ljava_lang_Throwable();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_util_Failure.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_util_Failure.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_util_Failure(x$1)
});
ScalaJS.c.scala_util_Failure.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_util_Failure.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_util_Failure.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_util_Failure(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Failure$1 = ScalaJS.as.scala_util_Failure(x$1);
      return ScalaJS.anyRefEqEq(this.exception__Ljava_lang_Throwable(), Failure$1.exception__Ljava_lang_Throwable())
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_util_Failure.prototype.init___Ljava_lang_Throwable = (function(exception) {
  this.exception$2 = exception;
  ScalaJS.c.scala_util_Try.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_util_Failure.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_util_Failure.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_util_Failure.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_util_Failure.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_util_Failure.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_util_Failure.prototype.copy__Ljava_lang_Throwable__ = (function(exception) {
  return this.copy__Ljava_lang_Throwable__Lscala_util_Failure(exception)
});
ScalaJS.c.scala_util_Failure.prototype.exception__ = (function() {
  return this.exception__Ljava_lang_Throwable()
});
/** @constructor */
ScalaJS.inheritable.scala_util_Failure = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Failure.prototype = ScalaJS.c.scala_util_Failure.prototype;
ScalaJS.is.scala_util_Failure = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Failure)))
});
ScalaJS.as.scala_util_Failure = (function(obj) {
  if ((ScalaJS.is.scala_util_Failure(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Failure")
  }
});
ScalaJS.isArrayOf.scala_util_Failure = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Failure)))
});
ScalaJS.asArrayOf.scala_util_Failure = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Failure(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Failure;", depth)
  }
});
ScalaJS.data.scala_util_Failure = new ScalaJS.ClassTypeData({
  scala_util_Failure: 0
}, false, "scala.util.Failure", ScalaJS.data.scala_util_Try, {
  scala_util_Failure: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_util_Try: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Failure.prototype.$classData = ScalaJS.data.scala_util_Failure;
//@ sourceMappingURL=Failure.js.map
