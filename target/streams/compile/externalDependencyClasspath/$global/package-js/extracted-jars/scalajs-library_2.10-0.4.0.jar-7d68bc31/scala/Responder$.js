/** @constructor */
ScalaJS.c.scala_Responder$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Responder$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Responder$.prototype.constructor = ScalaJS.c.scala_Responder$;
ScalaJS.c.scala_Responder$.prototype.constant__O__Lscala_Responder = (function(x) {
  return new ScalaJS.c.scala_Responder$$anon$1().init___O(x)
});
ScalaJS.c.scala_Responder$.prototype.exec__Lscala_Function0__Z = (function(x) {
  x.apply$mcV$sp__V();
  return true
});
ScalaJS.c.scala_Responder$.prototype.run__Lscala_Responder__Lscala_Option = (function(r) {
  var result = new ScalaJS.c.scala_runtime_ObjectRef().init___O(ScalaJS.modules.scala_None());
  r.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(result$1) {
    return (function(x) {
      result$1.elem$1 = new ScalaJS.c.scala_Some().init___O(x);
      return ScalaJS.bV(undefined)
    })
  })(result)));
  return ScalaJS.as.scala_Option(result.elem$1)
});
ScalaJS.c.scala_Responder$.prototype.loop__Lscala_Responder__Lscala_Responder = (function(r) {
  return r.flatMap__Lscala_Function1__Lscala_Responder(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(r$1) {
    return (function(_) {
      return ScalaJS.modules.scala_Responder().loop__Lscala_Responder__Lscala_Responder(r$1).map__Lscala_Function1__Lscala_Responder(new ScalaJS.c.scala_Responder$$anonfun$loop$1$$anonfun$apply$1().init___Lscala_Responder$$anonfun$loop$1(this))
    })
  })(r)))
});
ScalaJS.c.scala_Responder$.prototype.loopWhile__Lscala_Function0__Lscala_Responder__Lscala_Responder = (function(cond, r) {
  if (cond.apply$mcZ$sp__Z()) {
    return r.flatMap__Lscala_Function1__Lscala_Responder(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(cond$1, r$2) {
      return (function(_) {
        return ScalaJS.modules.scala_Responder().loopWhile__Lscala_Function0__Lscala_Responder__Lscala_Responder(cond$1, r$2).map__Lscala_Function1__Lscala_Responder(new ScalaJS.c.scala_Responder$$anonfun$loopWhile$1$$anonfun$apply$2().init___Lscala_Responder$$anonfun$loopWhile$1(this))
      })
    })(cond, r)))
  } else {
    return this.constant__O__Lscala_Responder(ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit())
  }
});
ScalaJS.c.scala_Responder$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_Responder()
});
ScalaJS.c.scala_Responder$.prototype.loopWhile__Lscala_Function0__Lscala_Responder__ = (function(cond, r) {
  return this.loopWhile__Lscala_Function0__Lscala_Responder__Lscala_Responder(cond, r)
});
ScalaJS.c.scala_Responder$.prototype.loop__Lscala_Responder__ = (function(r$2) {
  return this.loop__Lscala_Responder__Lscala_Responder(r$2)
});
ScalaJS.c.scala_Responder$.prototype.run__Lscala_Responder__ = (function(r$3) {
  return this.run__Lscala_Responder__Lscala_Option(r$3)
});
ScalaJS.c.scala_Responder$.prototype.exec__Lscala_Function0__ = (function(x) {
  return ScalaJS.bZ(this.exec__Lscala_Function0__Z(x))
});
ScalaJS.c.scala_Responder$.prototype.constant__O__ = (function(x$2) {
  return this.constant__O__Lscala_Responder(x$2)
});
/** @constructor */
ScalaJS.inheritable.scala_Responder$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Responder$.prototype = ScalaJS.c.scala_Responder$.prototype;
ScalaJS.is.scala_Responder$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Responder$)))
});
ScalaJS.as.scala_Responder$ = (function(obj) {
  if ((ScalaJS.is.scala_Responder$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Responder")
  }
});
ScalaJS.isArrayOf.scala_Responder$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Responder$)))
});
ScalaJS.asArrayOf.scala_Responder$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Responder$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Responder;", depth)
  }
});
ScalaJS.data.scala_Responder$ = new ScalaJS.ClassTypeData({
  scala_Responder$: 0
}, false, "scala.Responder$", ScalaJS.data.java_lang_Object, {
  scala_Responder$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Responder$.prototype.$classData = ScalaJS.data.scala_Responder$;
ScalaJS.moduleInstances.scala_Responder = undefined;
ScalaJS.modules.scala_Responder = (function() {
  if ((!ScalaJS.moduleInstances.scala_Responder)) {
    ScalaJS.moduleInstances.scala_Responder = new ScalaJS.c.scala_Responder$().init___()
  };
  return ScalaJS.moduleInstances.scala_Responder
});
//@ sourceMappingURL=Responder$.js.map
