/** @constructor */
ScalaJS.c.scala_util_Try = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_Try.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_Try.prototype.constructor = ScalaJS.c.scala_util_Try;
ScalaJS.c.scala_util_Try.prototype.getOrElse__Lscala_Function0__O = (function(default$2) {
  if (this.isSuccess__Z()) {
    return this.get__O()
  } else {
    return default$2.apply__O()
  }
});
ScalaJS.c.scala_util_Try.prototype.orElse__Lscala_Function0__Lscala_util_Try = (function(default$2) {
  try {
    if (this.isSuccess__Z()) {
      return this
    } else {
      return ScalaJS.as.scala_util_Try(default$2.apply__O())
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
ScalaJS.c.scala_util_Try.prototype.toOption__Lscala_Option = (function() {
  if (this.isSuccess__Z()) {
    return new ScalaJS.c.scala_Some().init___O(this.get__O())
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_util_Try.prototype.transform__Lscala_Function1__Lscala_Function1__Lscala_util_Try = (function(s, f) {
  try {
    var x1 = this;
    if (ScalaJS.is.scala_util_Success(x1)) {
      var x2 = ScalaJS.as.scala_util_Success(x1);
      var v = x2.value__O();
      return ScalaJS.as.scala_util_Try(s.apply__O__O(v))
    };
    if (ScalaJS.is.scala_util_Failure(x1)) {
      var x3 = ScalaJS.as.scala_util_Failure(x1);
      var e = x3.exception__Ljava_lang_Throwable();
      return ScalaJS.as.scala_util_Try(f.apply__O__O(e))
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    var ex6 = $jsexc$;
    var x4 = ex6;
    var o11 = ScalaJS.modules.scala_util_control_NonFatal().unapply__Ljava_lang_Throwable__Lscala_Option(x4);
    if ((!o11.isEmpty__Z())) {
      var e$2 = ScalaJS.as.java_lang_Throwable(o11.get__O());
      return new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(e$2)
    };
    throw ScalaJS.unwrapJavaScriptException(ex6)
  }
});
ScalaJS.c.scala_util_Try.prototype.transform__Lscala_Function1__Lscala_Function1__ = (function(s, f) {
  return this.transform__Lscala_Function1__Lscala_Function1__Lscala_util_Try(s, f)
});
ScalaJS.c.scala_util_Try.prototype.toOption__ = (function() {
  return this.toOption__Lscala_Option()
});
ScalaJS.c.scala_util_Try.prototype.orElse__Lscala_Function0__ = (function(default$2) {
  return this.orElse__Lscala_Function0__Lscala_util_Try(default$2)
});
ScalaJS.c.scala_util_Try.prototype.getOrElse__Lscala_Function0__ = (function(default$3) {
  return this.getOrElse__Lscala_Function0__O(default$3)
});
ScalaJS.c.scala_util_Try.prototype.failed__ = (function() {
  return this.failed__Lscala_util_Try()
});
ScalaJS.c.scala_util_Try.prototype.flatten__Lscala_Predef$$less$colon$less__ = (function(ev) {
  return this.flatten__Lscala_Predef$$less$colon$less__Lscala_util_Try(ev)
});
ScalaJS.c.scala_util_Try.prototype.recover__Lscala_PartialFunction__ = (function(f$2) {
  return this.recover__Lscala_PartialFunction__Lscala_util_Try(f$2)
});
ScalaJS.c.scala_util_Try.prototype.recoverWith__Lscala_PartialFunction__ = (function(f$3) {
  return this.recoverWith__Lscala_PartialFunction__Lscala_util_Try(f$3)
});
ScalaJS.c.scala_util_Try.prototype.filter__Lscala_Function1__ = (function(p) {
  return this.filter__Lscala_Function1__Lscala_util_Try(p)
});
ScalaJS.c.scala_util_Try.prototype.map__Lscala_Function1__ = (function(f$4) {
  return this.map__Lscala_Function1__Lscala_util_Try(f$4)
});
ScalaJS.c.scala_util_Try.prototype.flatMap__Lscala_Function1__ = (function(f$5) {
  return this.flatMap__Lscala_Function1__Lscala_util_Try(f$5)
});
ScalaJS.c.scala_util_Try.prototype.foreach__Lscala_Function1__ = (function(f$6) {
  return ScalaJS.bV(this.foreach__Lscala_Function1__V(f$6))
});
ScalaJS.c.scala_util_Try.prototype.get__ = (function() {
  return this.get__O()
});
ScalaJS.c.scala_util_Try.prototype.isSuccess__ = (function() {
  return ScalaJS.bZ(this.isSuccess__Z())
});
ScalaJS.c.scala_util_Try.prototype.isFailure__ = (function() {
  return ScalaJS.bZ(this.isFailure__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_util_Try = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Try.prototype = ScalaJS.c.scala_util_Try.prototype;
ScalaJS.is.scala_util_Try = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Try)))
});
ScalaJS.as.scala_util_Try = (function(obj) {
  if ((ScalaJS.is.scala_util_Try(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Try")
  }
});
ScalaJS.isArrayOf.scala_util_Try = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Try)))
});
ScalaJS.asArrayOf.scala_util_Try = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Try(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Try;", depth)
  }
});
ScalaJS.data.scala_util_Try = new ScalaJS.ClassTypeData({
  scala_util_Try: 0
}, false, "scala.util.Try", ScalaJS.data.java_lang_Object, {
  scala_util_Try: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Try.prototype.$classData = ScalaJS.data.scala_util_Try;
//@ sourceMappingURL=Try.js.map
