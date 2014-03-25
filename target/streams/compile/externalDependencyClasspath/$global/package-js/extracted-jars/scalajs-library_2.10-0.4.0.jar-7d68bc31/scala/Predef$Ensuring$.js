/** @constructor */
ScalaJS.c.scala_Predef$Ensuring$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Predef$Ensuring$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Predef$Ensuring$.prototype.constructor = ScalaJS.c.scala_Predef$Ensuring$;
ScalaJS.c.scala_Predef$Ensuring$.prototype.x$extension__O__O = (function($$this) {
  return $$this
});
ScalaJS.c.scala_Predef$Ensuring$.prototype.ensuring$extension0__O__Z__O = (function($$this, cond) {
  ScalaJS.modules.scala_Predef().assert__Z__V(cond);
  return $$this
});
ScalaJS.c.scala_Predef$Ensuring$.prototype.ensuring$extension1__O__Z__Lscala_Function0__O = (function($$this, cond, msg) {
  ScalaJS.modules.scala_Predef().assert__Z__Lscala_Function0__V(cond, msg);
  return $$this
});
ScalaJS.c.scala_Predef$Ensuring$.prototype.ensuring$extension2__O__Lscala_Function1__O = (function($$this, cond) {
  ScalaJS.modules.scala_Predef().assert__Z__V(ScalaJS.uZ(cond.apply__O__O($$this)));
  return $$this
});
ScalaJS.c.scala_Predef$Ensuring$.prototype.ensuring$extension3__O__Lscala_Function1__Lscala_Function0__O = (function($$this, cond, msg) {
  ScalaJS.modules.scala_Predef().assert__Z__Lscala_Function0__V(ScalaJS.uZ(cond.apply__O__O($$this)), msg);
  return $$this
});
ScalaJS.c.scala_Predef$Ensuring$.prototype.hashCode$extension__O__I = (function($$this) {
  return ScalaJS.objectHashCode($$this)
});
ScalaJS.c.scala_Predef$Ensuring$.prototype.equals$extension__O__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_Predef$Ensuring(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    if ((x$1 === null)) {
      var Ensuring$1 = null
    } else {
      var Ensuring$1 = ScalaJS.as.scala_Predef$Ensuring(x$1).$$und$undresultOfEnsuring__O()
    };
    return ScalaJS.anyEqEq($$this, Ensuring$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_Predef$Ensuring$.prototype.equals$extension__O__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__O__O__Z($$this, x$1))
});
ScalaJS.c.scala_Predef$Ensuring$.prototype.hashCode$extension__O__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__O__I($$this$2))
});
ScalaJS.c.scala_Predef$Ensuring$.prototype.ensuring$extension3__O__Lscala_Function1__Lscala_Function0__ = (function($$this$3, cond, msg) {
  return this.ensuring$extension3__O__Lscala_Function1__Lscala_Function0__O($$this$3, cond, msg)
});
ScalaJS.c.scala_Predef$Ensuring$.prototype.ensuring$extension2__O__Lscala_Function1__ = (function($$this$4, cond$2) {
  return this.ensuring$extension2__O__Lscala_Function1__O($$this$4, cond$2)
});
ScalaJS.c.scala_Predef$Ensuring$.prototype.ensuring$extension1__O__Z__Lscala_Function0__ = (function($$this$5, cond$3, msg$2) {
  return this.ensuring$extension1__O__Z__Lscala_Function0__O($$this$5, cond$3, msg$2)
});
ScalaJS.c.scala_Predef$Ensuring$.prototype.ensuring$extension0__O__Z__ = (function($$this$6, cond$4) {
  return this.ensuring$extension0__O__Z__O($$this$6, cond$4)
});
ScalaJS.c.scala_Predef$Ensuring$.prototype.x$extension__O__ = (function($$this$7) {
  return this.x$extension__O__O($$this$7)
});
/** @constructor */
ScalaJS.inheritable.scala_Predef$Ensuring$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Predef$Ensuring$.prototype = ScalaJS.c.scala_Predef$Ensuring$.prototype;
ScalaJS.is.scala_Predef$Ensuring$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Predef$Ensuring$)))
});
ScalaJS.as.scala_Predef$Ensuring$ = (function(obj) {
  if ((ScalaJS.is.scala_Predef$Ensuring$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Predef$Ensuring")
  }
});
ScalaJS.isArrayOf.scala_Predef$Ensuring$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Predef$Ensuring$)))
});
ScalaJS.asArrayOf.scala_Predef$Ensuring$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Predef$Ensuring$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Predef$Ensuring;", depth)
  }
});
ScalaJS.data.scala_Predef$Ensuring$ = new ScalaJS.ClassTypeData({
  scala_Predef$Ensuring$: 0
}, false, "scala.Predef$Ensuring$", ScalaJS.data.java_lang_Object, {
  scala_Predef$Ensuring$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Predef$Ensuring$.prototype.$classData = ScalaJS.data.scala_Predef$Ensuring$;
ScalaJS.moduleInstances.scala_Predef$Ensuring = undefined;
ScalaJS.modules.scala_Predef$Ensuring = (function() {
  if ((!ScalaJS.moduleInstances.scala_Predef$Ensuring)) {
    ScalaJS.moduleInstances.scala_Predef$Ensuring = new ScalaJS.c.scala_Predef$Ensuring$().init___()
  };
  return ScalaJS.moduleInstances.scala_Predef$Ensuring
});
//@ sourceMappingURL=Predef$Ensuring$.js.map
