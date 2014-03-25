/** @constructor */
ScalaJS.c.scala_util_control_Exception$Catch = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.pf$1 = null;
  this.fin$1 = null;
  this.rethrow$1 = null;
  this.name$1 = null;
  this.scala$util$control$Exception$Described$$$unddesc$1 = null
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_control_Exception$Catch.prototype.constructor = ScalaJS.c.scala_util_control_Exception$Catch;
ScalaJS.c.scala_util_control_Exception$Catch.prototype.scala$util$control$Exception$Described$$$unddesc__T = (function() {
  return this.scala$util$control$Exception$Described$$$unddesc$1
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.scala$util$control$Exception$Described$$$unddesc$und$eq__T__V = (function(x$1) {
  this.scala$util$control$Exception$Described$$$unddesc$1 = x$1
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.desc__T = (function() {
  return ScalaJS.impls.scala_util_control_Exception$Described$class__desc__Lscala_util_control_Exception$Described__T(this)
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.withDesc__T__Lscala_util_control_Exception$Described = (function(s) {
  return ScalaJS.impls.scala_util_control_Exception$Described$class__withDesc__Lscala_util_control_Exception$Described__T__Lscala_util_control_Exception$Described(this, s)
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_util_control_Exception$Described$class__toString__Lscala_util_control_Exception$Described__T(this)
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.pf__Lscala_PartialFunction = (function() {
  return this.pf$1
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.fin__Lscala_Option = (function() {
  return this.fin$1
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.rethrow__Lscala_Function1 = (function() {
  return this.rethrow$1
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.name__T = (function() {
  return this.name$1
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.or__Lscala_PartialFunction__Lscala_util_control_Exception$Catch = (function(pf2) {
  return new ScalaJS.c.scala_util_control_Exception$Catch().init___Lscala_PartialFunction__Lscala_Option__Lscala_Function1(this.pf__Lscala_PartialFunction().orElse__Lscala_PartialFunction__Lscala_PartialFunction(pf2), this.fin__Lscala_Option(), this.rethrow__Lscala_Function1())
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.or__Lscala_util_control_Exception$Catch__Lscala_util_control_Exception$Catch = (function(other) {
  return this.or__Lscala_PartialFunction__Lscala_util_control_Exception$Catch(other.pf__Lscala_PartialFunction())
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.apply__Lscala_Function0__O = (function(body) {
  try {
    return body.apply__O()
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    var x15 = $jsexc$;
    if (ScalaJS.uZ(this.rethrow__Lscala_Function1().apply__O__O(x15))) {
      throw ScalaJS.unwrapJavaScriptException(x15)
    } else {
      if (this.pf__Lscala_PartialFunction().isDefinedAt__O__Z(x15)) {
        return this.pf__Lscala_PartialFunction().apply__O__O(x15)
      } else {
        throw ScalaJS.unwrapJavaScriptException(x15)
      }
    }
  } finally {
    this.fin__Lscala_Option().map__Lscala_Function1__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(x$1) {
        x$1.invoke__V();
        return ScalaJS.bV(undefined)
      })
    })()))
  }
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.andFinally__Lscala_Function0__Lscala_util_control_Exception$Catch = (function(body) {
  var x1 = this.fin__Lscala_Option();
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
    return new ScalaJS.c.scala_util_control_Exception$Catch().init___Lscala_PartialFunction__Lscala_Option__Lscala_Function1(this.pf__Lscala_PartialFunction(), new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_util_control_Exception$Finally().init___Lscala_Function0(body)), this.rethrow__Lscala_Function1())
  };
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var f = ScalaJS.as.scala_util_control_Exception$Finally(x2.x__O());
    return new ScalaJS.c.scala_util_control_Exception$Catch().init___Lscala_PartialFunction__Lscala_Option__Lscala_Function1(this.pf__Lscala_PartialFunction(), new ScalaJS.c.scala_Some().init___O(f.and__Lscala_Function0__Lscala_util_control_Exception$Finally(body)), this.rethrow__Lscala_Function1())
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.opt__Lscala_Function0__Lscala_Option = (function(body) {
  return ScalaJS.as.scala_Option(this.toOption__Lscala_util_control_Exception$Catch().apply__Lscala_Function0__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(body$2) {
    return (function() {
      return new ScalaJS.c.scala_Some().init___O(body$2.apply__O())
    })
  })(body))))
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.either__Lscala_Function0__Lscala_util_Either = (function(body) {
  return ScalaJS.as.scala_util_Either(this.toEither__Lscala_util_control_Exception$Catch().apply__Lscala_Function0__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(body$1) {
    return (function() {
      return new ScalaJS.c.scala_util_Right().init___O(body$1.apply__O())
    })
  })(body))))
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.withTry__Lscala_Function0__Lscala_util_Try = (function(body) {
  return ScalaJS.as.scala_util_Try(this.toTry__Lscala_util_control_Exception$Catch().apply__Lscala_Function0__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(body$3) {
    return (function() {
      return new ScalaJS.c.scala_util_Success().init___O(body$3.apply__O())
    })
  })(body))))
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.withApply__Lscala_Function1__Lscala_util_control_Exception$Catch = (function(f) {
  var pf2 = new ScalaJS.c.scala_util_control_Exception$Catch$$anon$2().init___Lscala_util_control_Exception$Catch__Lscala_Function1(this, f);
  return new ScalaJS.c.scala_util_control_Exception$Catch().init___Lscala_PartialFunction__Lscala_Option__Lscala_Function1(pf2, this.fin__Lscala_Option(), this.rethrow__Lscala_Function1())
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.toOption__Lscala_util_control_Exception$Catch = (function() {
  return this.withApply__Lscala_Function1__Lscala_util_control_Exception$Catch(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$2) {
      return ScalaJS.modules.scala_None()
    })
  })()))
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.toEither__Lscala_util_control_Exception$Catch = (function() {
  return this.withApply__Lscala_Function1__Lscala_util_control_Exception$Catch(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$3) {
      return new ScalaJS.c.scala_util_Left().init___O(x$3)
    })
  })()))
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.toTry__Lscala_util_control_Exception$Catch = (function() {
  return this.withApply__Lscala_Function1__Lscala_util_control_Exception$Catch(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x) {
      return new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(x)
    })
  })()))
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.init___Lscala_PartialFunction__Lscala_Option__Lscala_Function1 = (function(pf, fin, rethrow) {
  this.pf$1 = pf;
  this.fin$1 = fin;
  this.rethrow$1 = rethrow;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_util_control_Exception$Described$class__$init$__Lscala_util_control_Exception$Described__V(this);
  this.name$1 = "Catch";
  return this
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.withDesc__T__ = (function(s) {
  return this.withDesc__T__Lscala_util_control_Exception$Described(s)
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.desc__ = (function() {
  return this.desc__T()
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.scala$util$control$Exception$Described$$$unddesc$und$eq__T__ = (function(x$1) {
  return ScalaJS.bV(this.scala$util$control$Exception$Described$$$unddesc$und$eq__T__V(x$1))
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.scala$util$control$Exception$Described$$$unddesc__ = (function() {
  return this.scala$util$control$Exception$Described$$$unddesc__T()
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.toTry__ = (function() {
  return this.toTry__Lscala_util_control_Exception$Catch()
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.toEither__ = (function() {
  return this.toEither__Lscala_util_control_Exception$Catch()
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.toOption__ = (function() {
  return this.toOption__Lscala_util_control_Exception$Catch()
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.withApply__Lscala_Function1__ = (function(f) {
  return this.withApply__Lscala_Function1__Lscala_util_control_Exception$Catch(f)
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.withTry__Lscala_Function0__ = (function(body) {
  return this.withTry__Lscala_Function0__Lscala_util_Try(body)
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.either__Lscala_Function0__ = (function(body$2) {
  return this.either__Lscala_Function0__Lscala_util_Either(body$2)
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.opt__Lscala_Function0__ = (function(body$3) {
  return this.opt__Lscala_Function0__Lscala_Option(body$3)
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.andFinally__Lscala_Function0__ = (function(body$4) {
  return this.andFinally__Lscala_Function0__Lscala_util_control_Exception$Catch(body$4)
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.apply__Lscala_Function0__ = (function(body$5) {
  return this.apply__Lscala_Function0__O(body$5)
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.or__Lscala_util_control_Exception$Catch__ = (function(other) {
  return this.or__Lscala_util_control_Exception$Catch__Lscala_util_control_Exception$Catch(other)
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.or__Lscala_PartialFunction__ = (function(pf2) {
  return this.or__Lscala_PartialFunction__Lscala_util_control_Exception$Catch(pf2)
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.name__ = (function() {
  return this.name__T()
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.rethrow__ = (function() {
  return this.rethrow__Lscala_Function1()
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.fin__ = (function() {
  return this.fin__Lscala_Option()
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.pf__ = (function() {
  return this.pf__Lscala_PartialFunction()
});
/** @constructor */
ScalaJS.inheritable.scala_util_control_Exception$Catch = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_control_Exception$Catch.prototype = ScalaJS.c.scala_util_control_Exception$Catch.prototype;
ScalaJS.is.scala_util_control_Exception$Catch = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_Exception$Catch)))
});
ScalaJS.as.scala_util_control_Exception$Catch = (function(obj) {
  if ((ScalaJS.is.scala_util_control_Exception$Catch(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.Exception$Catch")
  }
});
ScalaJS.isArrayOf.scala_util_control_Exception$Catch = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_Exception$Catch)))
});
ScalaJS.asArrayOf.scala_util_control_Exception$Catch = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_Exception$Catch(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.Exception$Catch;", depth)
  }
});
ScalaJS.data.scala_util_control_Exception$Catch = new ScalaJS.ClassTypeData({
  scala_util_control_Exception$Catch: 0
}, false, "scala.util.control.Exception$Catch", ScalaJS.data.java_lang_Object, {
  scala_util_control_Exception$Catch: 1,
  scala_util_control_Exception$Described: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_control_Exception$Catch.prototype.$classData = ScalaJS.data.scala_util_control_Exception$Catch;
//@ sourceMappingURL=Exception$Catch.js.map
