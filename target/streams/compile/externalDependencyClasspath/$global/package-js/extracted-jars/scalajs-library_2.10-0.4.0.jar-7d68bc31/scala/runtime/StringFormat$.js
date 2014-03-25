/** @constructor */
ScalaJS.c.scala_runtime_StringFormat$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_StringFormat$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_StringFormat$.prototype.constructor = ScalaJS.c.scala_runtime_StringFormat$;
ScalaJS.c.scala_runtime_StringFormat$.prototype.formatted$extension__O__T__T = (function($$this, fmtstr$2) {
  return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(fmtstr$2)).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [$$this])))
});
ScalaJS.c.scala_runtime_StringFormat$.prototype.hashCode$extension__O__I = (function($$this) {
  return ScalaJS.objectHashCode($$this)
});
ScalaJS.c.scala_runtime_StringFormat$.prototype.equals$extension__O__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_runtime_StringFormat(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    if ((x$1 === null)) {
      var StringFormat$1 = null
    } else {
      var StringFormat$1 = ScalaJS.as.scala_runtime_StringFormat(x$1).self__O()
    };
    return ScalaJS.anyEqEq($$this, StringFormat$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_runtime_StringFormat$.prototype.equals$extension__O__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__O__O__Z($$this, x$1))
});
ScalaJS.c.scala_runtime_StringFormat$.prototype.hashCode$extension__O__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__O__I($$this$2))
});
ScalaJS.c.scala_runtime_StringFormat$.prototype.formatted$extension__O__T__ = (function($$this$3, fmtstr) {
  return this.formatted$extension__O__T__T($$this$3, fmtstr)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_StringFormat$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_StringFormat$.prototype = ScalaJS.c.scala_runtime_StringFormat$.prototype;
ScalaJS.is.scala_runtime_StringFormat$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_StringFormat$)))
});
ScalaJS.as.scala_runtime_StringFormat$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_StringFormat$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.StringFormat")
  }
});
ScalaJS.isArrayOf.scala_runtime_StringFormat$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_StringFormat$)))
});
ScalaJS.asArrayOf.scala_runtime_StringFormat$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_StringFormat$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.StringFormat;", depth)
  }
});
ScalaJS.data.scala_runtime_StringFormat$ = new ScalaJS.ClassTypeData({
  scala_runtime_StringFormat$: 0
}, false, "scala.runtime.StringFormat$", ScalaJS.data.java_lang_Object, {
  scala_runtime_StringFormat$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_StringFormat$.prototype.$classData = ScalaJS.data.scala_runtime_StringFormat$;
ScalaJS.moduleInstances.scala_runtime_StringFormat = undefined;
ScalaJS.modules.scala_runtime_StringFormat = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_StringFormat)) {
    ScalaJS.moduleInstances.scala_runtime_StringFormat = new ScalaJS.c.scala_runtime_StringFormat$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_StringFormat
});
//@ sourceMappingURL=StringFormat$.js.map
