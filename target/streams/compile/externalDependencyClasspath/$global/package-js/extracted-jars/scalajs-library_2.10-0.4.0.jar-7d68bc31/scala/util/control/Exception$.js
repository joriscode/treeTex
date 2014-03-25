/** @constructor */
ScalaJS.c.scala_util_control_Exception$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.nothingCatcher$1 = null;
  this.noCatch$1 = null
});
ScalaJS.c.scala_util_control_Exception$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_control_Exception$.prototype.constructor = ScalaJS.c.scala_util_control_Exception$;
ScalaJS.c.scala_util_control_Exception$.prototype.mkCatcher__Lscala_Function1__Lscala_Function1__Lscala_reflect_ClassTag__Lscala_PartialFunction = (function(isDef, f, evidence$1) {
  return new ScalaJS.c.scala_util_control_Exception$$anon$1().init___Lscala_Function1__Lscala_Function1__Lscala_reflect_ClassTag(isDef, f, evidence$1)
});
ScalaJS.c.scala_util_control_Exception$.prototype.mkThrowableCatcher__Lscala_Function1__Lscala_Function1__Lscala_PartialFunction = (function(isDef, f) {
  return this.mkCatcher__Lscala_Function1__Lscala_Function1__Lscala_reflect_ClassTag__Lscala_PartialFunction(isDef, f, ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.java_lang_Throwable.getClassOf()))
});
ScalaJS.c.scala_util_control_Exception$.prototype.throwableSubtypeToCatcher__Lscala_PartialFunction__Lscala_reflect_ClassTag__Lscala_PartialFunction = (function(pf, evidence$2) {
  return this.mkCatcher__Lscala_Function1__Lscala_Function1__Lscala_reflect_ClassTag__Lscala_PartialFunction(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(pf$1) {
    return (function(x) {
      return ScalaJS.bZ(pf$1.isDefinedAt__O__Z(x))
    })
  })(pf)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(pf$1) {
    return (function(v1) {
      return pf$1.apply__O__O(v1)
    })
  })(pf)), evidence$2)
});
ScalaJS.c.scala_util_control_Exception$.prototype.shouldRethrow__Ljava_lang_Throwable__Z = (function(x) {
  var x1 = x;
  if (ScalaJS.is.scala_util_control_ControlThrowable(x1)) {
    return true
  };
  if (ScalaJS.is.java_lang_InterruptedException(x1)) {
    return true
  };
  return false
});
ScalaJS.c.scala_util_control_Exception$.prototype.nothingCatcher__Lscala_PartialFunction = (function() {
  return this.nothingCatcher$1
});
ScalaJS.c.scala_util_control_Exception$.prototype.nonFatalCatcher__Lscala_PartialFunction = (function() {
  return this.mkThrowableCatcher__Lscala_Function1__Lscala_Function1__Lscala_PartialFunction(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x0$1) {
      var x1 = x0$1;
      matchEnd5: {
        var o8 = ScalaJS.modules.scala_util_control_NonFatal().unapply__Ljava_lang_Throwable__Lscala_Option(x1);
        if ((!o8.isEmpty__Z())) {
          var jsx$1 = true;
          break matchEnd5
        };
        var jsx$1 = false;
        break matchEnd5
      };
      return ScalaJS.bZ(jsx$1)
    })
  })()), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$6) {
      throw ScalaJS.unwrapJavaScriptException(x$6)
    })
  })()))
});
ScalaJS.c.scala_util_control_Exception$.prototype.allCatcher__Lscala_PartialFunction = (function() {
  return this.mkThrowableCatcher__Lscala_Function1__Lscala_Function1__Lscala_PartialFunction(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$7) {
      return ScalaJS.bZ(true)
    })
  })()), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$8) {
      throw ScalaJS.unwrapJavaScriptException(x$8)
    })
  })()))
});
ScalaJS.c.scala_util_control_Exception$.prototype.noCatch__Lscala_util_control_Exception$Catch = (function() {
  return this.noCatch$1
});
ScalaJS.c.scala_util_control_Exception$.prototype.allCatch__Lscala_util_control_Exception$Catch = (function() {
  return ScalaJS.as.scala_util_control_Exception$Catch(new ScalaJS.c.scala_util_control_Exception$Catch().init___Lscala_PartialFunction__Lscala_Option__Lscala_Function1(this.allCatcher__Lscala_PartialFunction(), ScalaJS.modules.scala_util_control_Exception$Catch().$$lessinit$greater$default$2__Lscala_Option(), ScalaJS.modules.scala_util_control_Exception$Catch().$$lessinit$greater$default$3__Lscala_Function1()).withDesc__T__Lscala_util_control_Exception$Described("<everything>"))
});
ScalaJS.c.scala_util_control_Exception$.prototype.nonFatalCatch__Lscala_util_control_Exception$Catch = (function() {
  return ScalaJS.as.scala_util_control_Exception$Catch(new ScalaJS.c.scala_util_control_Exception$Catch().init___Lscala_PartialFunction__Lscala_Option__Lscala_Function1(this.nonFatalCatcher__Lscala_PartialFunction(), ScalaJS.modules.scala_util_control_Exception$Catch().$$lessinit$greater$default$2__Lscala_Option(), ScalaJS.modules.scala_util_control_Exception$Catch().$$lessinit$greater$default$3__Lscala_Function1()).withDesc__T__Lscala_util_control_Exception$Described("<non-fatal>"))
});
ScalaJS.c.scala_util_control_Exception$.prototype.catching__Lscala_collection_Seq__Lscala_util_control_Exception$Catch = (function(exceptions) {
  return ScalaJS.as.scala_util_control_Exception$Catch(new ScalaJS.c.scala_util_control_Exception$Catch().init___Lscala_PartialFunction__Lscala_Option__Lscala_Function1(this.pfFromExceptions__p1__Lscala_collection_Seq__Lscala_PartialFunction(exceptions), ScalaJS.modules.scala_util_control_Exception$Catch().$$lessinit$greater$default$2__Lscala_Option(), ScalaJS.modules.scala_util_control_Exception$Catch().$$lessinit$greater$default$3__Lscala_Function1()).withDesc__T__Lscala_util_control_Exception$Described(ScalaJS.as.scala_collection_TraversableOnce(exceptions.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$9) {
      return x$9.getName__T()
    })
  })()), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).mkString__T__T(", ")))
});
ScalaJS.c.scala_util_control_Exception$.prototype.catching__Lscala_PartialFunction__Lscala_util_control_Exception$Catch = (function(c) {
  return new ScalaJS.c.scala_util_control_Exception$Catch().init___Lscala_PartialFunction__Lscala_Option__Lscala_Function1(c, ScalaJS.modules.scala_util_control_Exception$Catch().$$lessinit$greater$default$2__Lscala_Option(), ScalaJS.modules.scala_util_control_Exception$Catch().$$lessinit$greater$default$3__Lscala_Function1())
});
ScalaJS.c.scala_util_control_Exception$.prototype.catchingPromiscuously__Lscala_collection_Seq__Lscala_util_control_Exception$Catch = (function(exceptions) {
  return this.catchingPromiscuously__Lscala_PartialFunction__Lscala_util_control_Exception$Catch(this.pfFromExceptions__p1__Lscala_collection_Seq__Lscala_PartialFunction(exceptions))
});
ScalaJS.c.scala_util_control_Exception$.prototype.catchingPromiscuously__Lscala_PartialFunction__Lscala_util_control_Exception$Catch = (function(c) {
  return new ScalaJS.c.scala_util_control_Exception$Catch().init___Lscala_PartialFunction__Lscala_Option__Lscala_Function1(c, ScalaJS.modules.scala_None(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$10) {
      return ScalaJS.bZ(false)
    })
  })()))
});
ScalaJS.c.scala_util_control_Exception$.prototype.ignoring__Lscala_collection_Seq__Lscala_util_control_Exception$Catch = (function(exceptions) {
  return this.catching__Lscala_collection_Seq__Lscala_util_control_Exception$Catch(exceptions).withApply__Lscala_Function1__Lscala_util_control_Exception$Catch(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$11) {
      return ScalaJS.bV(undefined)
    })
  })()))
});
ScalaJS.c.scala_util_control_Exception$.prototype.failing__Lscala_collection_Seq__Lscala_util_control_Exception$Catch = (function(exceptions) {
  return this.catching__Lscala_collection_Seq__Lscala_util_control_Exception$Catch(exceptions).withApply__Lscala_Function1__Lscala_util_control_Exception$Catch(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$12) {
      return ScalaJS.modules.scala_None()
    })
  })()))
});
ScalaJS.c.scala_util_control_Exception$.prototype.failAsValue__Lscala_collection_Seq__Lscala_Function0__Lscala_util_control_Exception$Catch = (function(exceptions, value) {
  return this.catching__Lscala_collection_Seq__Lscala_util_control_Exception$Catch(exceptions).withApply__Lscala_Function1__Lscala_util_control_Exception$Catch(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(value$1) {
    return (function(x$13) {
      return value$1.apply__O()
    })
  })(value)))
});
ScalaJS.c.scala_util_control_Exception$.prototype.handling__Lscala_collection_Seq__Lscala_util_control_Exception$By = (function(exceptions) {
  return new ScalaJS.c.scala_util_control_Exception$By().init___Lscala_Function1(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(exceptions$2) {
    return (function(f) {
      return ScalaJS.modules.scala_util_control_Exception().scala$util$control$Exception$$fun$1__Lscala_Function1__Lscala_collection_Seq__Lscala_util_control_Exception$Catch(f, exceptions$2)
    })
  })(exceptions)))
});
ScalaJS.c.scala_util_control_Exception$.prototype.ultimately__Lscala_Function0__Lscala_util_control_Exception$Catch = (function(body) {
  return this.noCatch__Lscala_util_control_Exception$Catch().andFinally__Lscala_Function0__Lscala_util_control_Exception$Catch(body)
});
ScalaJS.c.scala_util_control_Exception$.prototype.unwrapping__Lscala_collection_Seq__Lscala_util_control_Exception$Catch = (function(exceptions) {
  return this.catching__Lscala_collection_Seq__Lscala_util_control_Exception$Catch(exceptions).withApply__Lscala_Function1__Lscala_util_control_Exception$Catch(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(exceptions$3) {
    return (function(x) {
      throw ScalaJS.unwrapJavaScriptException(ScalaJS.modules.scala_util_control_Exception().scala$util$control$Exception$$unwrap$1__Ljava_lang_Throwable__Lscala_collection_Seq__Ljava_lang_Throwable(x, exceptions$3))
    })
  })(exceptions)))
});
ScalaJS.c.scala_util_control_Exception$.prototype.scala$util$control$Exception$$wouldMatch__Ljava_lang_Throwable__Lscala_collection_Seq__Z = (function(x, classes) {
  return classes.exists__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(x$15) {
    return (function(x$14) {
      return ScalaJS.bZ(x$14.isAssignableFrom__Ljava_lang_Class__Z(ScalaJS.objectGetClass(x$15)))
    })
  })(x)))
});
ScalaJS.c.scala_util_control_Exception$.prototype.pfFromExceptions__p1__Lscala_collection_Seq__Lscala_PartialFunction = (function(exceptions) {
  return new ScalaJS.c.scala_util_control_Exception$$anonfun$pfFromExceptions$1().init___Lscala_collection_Seq(exceptions)
});
ScalaJS.c.scala_util_control_Exception$.prototype.scala$util$control$Exception$$fun$1__Lscala_Function1__Lscala_collection_Seq__Lscala_util_control_Exception$Catch = (function(f, exceptions$2) {
  return this.catching__Lscala_collection_Seq__Lscala_util_control_Exception$Catch(exceptions$2).withApply__Lscala_Function1__Lscala_util_control_Exception$Catch(f)
});
ScalaJS.c.scala_util_control_Exception$.prototype.scala$util$control$Exception$$unwrap$1__Ljava_lang_Throwable__Lscala_collection_Seq__Ljava_lang_Throwable = (function(x, exceptions$3) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((_$this.scala$util$control$Exception$$wouldMatch__Ljava_lang_Throwable__Lscala_collection_Seq__Z(x, exceptions$3) && (!ScalaJS.anyRefEqEq(x.getCause__Ljava_lang_Throwable(), null)))) {
      x = x.getCause__Ljava_lang_Throwable();
      continue tailCallLoop
    } else {
      return x
    }
  }
});
ScalaJS.c.scala_util_control_Exception$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_util_control_Exception = this;
  this.nothingCatcher$1 = this.mkThrowableCatcher__Lscala_Function1__Lscala_Function1__Lscala_PartialFunction(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$4) {
      return ScalaJS.bZ(false)
    })
  })()), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$5) {
      throw ScalaJS.unwrapJavaScriptException(x$5)
    })
  })()));
  this.noCatch$1 = ScalaJS.as.scala_util_control_Exception$Catch(new ScalaJS.c.scala_util_control_Exception$Catch().init___Lscala_PartialFunction__Lscala_Option__Lscala_Function1(this.nothingCatcher__Lscala_PartialFunction(), ScalaJS.modules.scala_util_control_Exception$Catch().$$lessinit$greater$default$2__Lscala_Option(), ScalaJS.modules.scala_util_control_Exception$Catch().$$lessinit$greater$default$3__Lscala_Function1()).withDesc__T__Lscala_util_control_Exception$Described("<nothing>"));
  return this
});
ScalaJS.c.scala_util_control_Exception$.prototype.scala$util$control$Exception$$unwrap$1__Ljava_lang_Throwable__Lscala_collection_Seq__ = (function(x, exceptions$3) {
  return this.scala$util$control$Exception$$unwrap$1__Ljava_lang_Throwable__Lscala_collection_Seq__Ljava_lang_Throwable(x, exceptions$3)
});
ScalaJS.c.scala_util_control_Exception$.prototype.scala$util$control$Exception$$fun$1__Lscala_Function1__Lscala_collection_Seq__ = (function(f, exceptions$2) {
  return this.scala$util$control$Exception$$fun$1__Lscala_Function1__Lscala_collection_Seq__Lscala_util_control_Exception$Catch(f, exceptions$2)
});
ScalaJS.c.scala_util_control_Exception$.prototype.scala$util$control$Exception$$wouldMatch__Ljava_lang_Throwable__Lscala_collection_Seq__ = (function(x$2, classes) {
  return ScalaJS.bZ(this.scala$util$control$Exception$$wouldMatch__Ljava_lang_Throwable__Lscala_collection_Seq__Z(x$2, classes))
});
ScalaJS.c.scala_util_control_Exception$.prototype.unwrapping__Lscala_collection_Seq__ = (function(exceptions) {
  return this.unwrapping__Lscala_collection_Seq__Lscala_util_control_Exception$Catch(exceptions)
});
ScalaJS.c.scala_util_control_Exception$.prototype.ultimately__Lscala_Function0__ = (function(body) {
  return this.ultimately__Lscala_Function0__Lscala_util_control_Exception$Catch(body)
});
ScalaJS.c.scala_util_control_Exception$.prototype.handling__Lscala_collection_Seq__ = (function(exceptions$4) {
  return this.handling__Lscala_collection_Seq__Lscala_util_control_Exception$By(exceptions$4)
});
ScalaJS.c.scala_util_control_Exception$.prototype.failAsValue__Lscala_collection_Seq__Lscala_Function0__ = (function(exceptions$5, value) {
  return this.failAsValue__Lscala_collection_Seq__Lscala_Function0__Lscala_util_control_Exception$Catch(exceptions$5, value)
});
ScalaJS.c.scala_util_control_Exception$.prototype.failing__Lscala_collection_Seq__ = (function(exceptions$6) {
  return this.failing__Lscala_collection_Seq__Lscala_util_control_Exception$Catch(exceptions$6)
});
ScalaJS.c.scala_util_control_Exception$.prototype.ignoring__Lscala_collection_Seq__ = (function(exceptions$7) {
  return this.ignoring__Lscala_collection_Seq__Lscala_util_control_Exception$Catch(exceptions$7)
});
ScalaJS.c.scala_util_control_Exception$.prototype.catchingPromiscuously__Lscala_PartialFunction__ = (function(c) {
  return this.catchingPromiscuously__Lscala_PartialFunction__Lscala_util_control_Exception$Catch(c)
});
ScalaJS.c.scala_util_control_Exception$.prototype.catchingPromiscuously__Lscala_collection_Seq__ = (function(exceptions$8) {
  return this.catchingPromiscuously__Lscala_collection_Seq__Lscala_util_control_Exception$Catch(exceptions$8)
});
ScalaJS.c.scala_util_control_Exception$.prototype.catching__Lscala_PartialFunction__ = (function(c$2) {
  return this.catching__Lscala_PartialFunction__Lscala_util_control_Exception$Catch(c$2)
});
ScalaJS.c.scala_util_control_Exception$.prototype.catching__Lscala_collection_Seq__ = (function(exceptions$9) {
  return this.catching__Lscala_collection_Seq__Lscala_util_control_Exception$Catch(exceptions$9)
});
ScalaJS.c.scala_util_control_Exception$.prototype.nonFatalCatch__ = (function() {
  return this.nonFatalCatch__Lscala_util_control_Exception$Catch()
});
ScalaJS.c.scala_util_control_Exception$.prototype.allCatch__ = (function() {
  return this.allCatch__Lscala_util_control_Exception$Catch()
});
ScalaJS.c.scala_util_control_Exception$.prototype.noCatch__ = (function() {
  return this.noCatch__Lscala_util_control_Exception$Catch()
});
ScalaJS.c.scala_util_control_Exception$.prototype.allCatcher__ = (function() {
  return this.allCatcher__Lscala_PartialFunction()
});
ScalaJS.c.scala_util_control_Exception$.prototype.nonFatalCatcher__ = (function() {
  return this.nonFatalCatcher__Lscala_PartialFunction()
});
ScalaJS.c.scala_util_control_Exception$.prototype.nothingCatcher__ = (function() {
  return this.nothingCatcher__Lscala_PartialFunction()
});
ScalaJS.c.scala_util_control_Exception$.prototype.shouldRethrow__Ljava_lang_Throwable__ = (function(x$3) {
  return ScalaJS.bZ(this.shouldRethrow__Ljava_lang_Throwable__Z(x$3))
});
ScalaJS.c.scala_util_control_Exception$.prototype.throwableSubtypeToCatcher__Lscala_PartialFunction__Lscala_reflect_ClassTag__ = (function(pf, evidence$2) {
  return this.throwableSubtypeToCatcher__Lscala_PartialFunction__Lscala_reflect_ClassTag__Lscala_PartialFunction(pf, evidence$2)
});
ScalaJS.c.scala_util_control_Exception$.prototype.mkThrowableCatcher__Lscala_Function1__Lscala_Function1__ = (function(isDef, f$2) {
  return this.mkThrowableCatcher__Lscala_Function1__Lscala_Function1__Lscala_PartialFunction(isDef, f$2)
});
ScalaJS.c.scala_util_control_Exception$.prototype.mkCatcher__Lscala_Function1__Lscala_Function1__Lscala_reflect_ClassTag__ = (function(isDef$2, f$3, evidence$1) {
  return this.mkCatcher__Lscala_Function1__Lscala_Function1__Lscala_reflect_ClassTag__Lscala_PartialFunction(isDef$2, f$3, evidence$1)
});
/** @constructor */
ScalaJS.inheritable.scala_util_control_Exception$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_control_Exception$.prototype = ScalaJS.c.scala_util_control_Exception$.prototype;
ScalaJS.is.scala_util_control_Exception$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_Exception$)))
});
ScalaJS.as.scala_util_control_Exception$ = (function(obj) {
  if ((ScalaJS.is.scala_util_control_Exception$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.Exception")
  }
});
ScalaJS.isArrayOf.scala_util_control_Exception$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_Exception$)))
});
ScalaJS.asArrayOf.scala_util_control_Exception$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_Exception$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.Exception;", depth)
  }
});
ScalaJS.data.scala_util_control_Exception$ = new ScalaJS.ClassTypeData({
  scala_util_control_Exception$: 0
}, false, "scala.util.control.Exception$", ScalaJS.data.java_lang_Object, {
  scala_util_control_Exception$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_control_Exception$.prototype.$classData = ScalaJS.data.scala_util_control_Exception$;
ScalaJS.moduleInstances.scala_util_control_Exception = undefined;
ScalaJS.modules.scala_util_control_Exception = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_control_Exception)) {
    ScalaJS.moduleInstances.scala_util_control_Exception = new ScalaJS.c.scala_util_control_Exception$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_control_Exception
});
//@ sourceMappingURL=Exception$.js.map
