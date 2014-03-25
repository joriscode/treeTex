/** @constructor */
ScalaJS.c.scala_runtime_StringAdd$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_StringAdd$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_StringAdd$.prototype.constructor = ScalaJS.c.scala_runtime_StringAdd$;
ScalaJS.c.scala_runtime_StringAdd$.prototype.$$plus$extension__O__T__T = (function($$this, other$2) {
  return (("" + ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__O__T($$this)) + other$2)
});
ScalaJS.c.scala_runtime_StringAdd$.prototype.hashCode$extension__O__I = (function($$this) {
  return ScalaJS.objectHashCode($$this)
});
ScalaJS.c.scala_runtime_StringAdd$.prototype.equals$extension__O__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_runtime_StringAdd(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    if ((x$1 === null)) {
      var StringAdd$1 = null
    } else {
      var StringAdd$1 = ScalaJS.as.scala_runtime_StringAdd(x$1).self__O()
    };
    return ScalaJS.anyEqEq($$this, StringAdd$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_runtime_StringAdd$.prototype.equals$extension__O__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__O__O__Z($$this, x$1))
});
ScalaJS.c.scala_runtime_StringAdd$.prototype.hashCode$extension__O__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__O__I($$this$2))
});
ScalaJS.c.scala_runtime_StringAdd$.prototype.$$plus$extension__O__T__ = (function($$this$3, other) {
  return this.$$plus$extension__O__T__T($$this$3, other)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_StringAdd$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_StringAdd$.prototype = ScalaJS.c.scala_runtime_StringAdd$.prototype;
ScalaJS.is.scala_runtime_StringAdd$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_StringAdd$)))
});
ScalaJS.as.scala_runtime_StringAdd$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_StringAdd$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.StringAdd")
  }
});
ScalaJS.isArrayOf.scala_runtime_StringAdd$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_StringAdd$)))
});
ScalaJS.asArrayOf.scala_runtime_StringAdd$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_StringAdd$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.StringAdd;", depth)
  }
});
ScalaJS.data.scala_runtime_StringAdd$ = new ScalaJS.ClassTypeData({
  scala_runtime_StringAdd$: 0
}, false, "scala.runtime.StringAdd$", ScalaJS.data.java_lang_Object, {
  scala_runtime_StringAdd$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_StringAdd$.prototype.$classData = ScalaJS.data.scala_runtime_StringAdd$;
ScalaJS.moduleInstances.scala_runtime_StringAdd = undefined;
ScalaJS.modules.scala_runtime_StringAdd = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_StringAdd)) {
    ScalaJS.moduleInstances.scala_runtime_StringAdd = new ScalaJS.c.scala_runtime_StringAdd$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_StringAdd
});
//@ sourceMappingURL=StringAdd$.js.map
