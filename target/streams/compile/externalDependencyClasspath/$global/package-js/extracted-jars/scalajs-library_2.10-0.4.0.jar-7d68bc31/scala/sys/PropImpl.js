/** @constructor */
ScalaJS.c.scala_sys_PropImpl = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.key$1 = null;
  this.valueFn$1 = null
});
ScalaJS.c.scala_sys_PropImpl.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_PropImpl.prototype.constructor = ScalaJS.c.scala_sys_PropImpl;
ScalaJS.c.scala_sys_PropImpl.prototype.key__T = (function() {
  return this.key$1
});
ScalaJS.c.scala_sys_PropImpl.prototype.value__O = (function() {
  if (this.isSet__Z()) {
    return this.valueFn$1.apply__O__O(this.get__T())
  } else {
    return this.zero__O()
  }
});
ScalaJS.c.scala_sys_PropImpl.prototype.isSet__Z = (function() {
  return this.underlying__Lscala_collection_mutable_Map().contains__O__Z(this.key__T())
});
ScalaJS.c.scala_sys_PropImpl.prototype.set__T__T = (function(newValue) {
  if (this.isSet__Z()) {
    var old = this.get__T()
  } else {
    var old = null
  };
  this.underlying__Lscala_collection_mutable_Map().update__O__O__V(this.key__T(), newValue);
  return old
});
ScalaJS.c.scala_sys_PropImpl.prototype.setValue__O__O = (function(newValue) {
  var old = this.value__O();
  if (ScalaJS.anyRefEqEq(newValue, null)) {
    this.set__T__T(null)
  } else {
    this.set__T__T(("" + newValue))
  };
  return old
});
ScalaJS.c.scala_sys_PropImpl.prototype.get__T = (function() {
  if (this.isSet__Z()) {
    return ScalaJS.as.java_lang_String(this.underlying__Lscala_collection_mutable_Map().getOrElse__O__Lscala_Function0__O(this.key__T(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
      return (function() {
        return ""
      })
    })())))
  } else {
    return ""
  }
});
ScalaJS.c.scala_sys_PropImpl.prototype.clear__V = (function() {
  this.underlying__Lscala_collection_mutable_Map().$$minus$eq__O__Lscala_collection_mutable_MapLike(this.key__T())
});
ScalaJS.c.scala_sys_PropImpl.prototype.option__Lscala_Option = (function() {
  if (this.isSet__Z()) {
    return new ScalaJS.c.scala_Some().init___O(this.value__O())
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_sys_PropImpl.prototype.or__Lscala_Function0__O = (function(alt) {
  if (this.isSet__Z()) {
    return this.value__O()
  } else {
    return alt.apply__O()
  }
});
ScalaJS.c.scala_sys_PropImpl.prototype.underlying__Lscala_collection_mutable_Map = (function() {
  return ScalaJS.modules.scala_sys_package().props__Lscala_sys_SystemProperties()
});
ScalaJS.c.scala_sys_PropImpl.prototype.zero__O = (function() {
  return null
});
ScalaJS.c.scala_sys_PropImpl.prototype.getString__p1__T = (function() {
  if (this.isSet__Z()) {
    return ("currently: " + this.get__T())
  } else {
    return "unset"
  }
});
ScalaJS.c.scala_sys_PropImpl.prototype.toString__T = (function() {
  return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("%s (%s)")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [this.key__T(), this.getString__p1__T()])))
});
ScalaJS.c.scala_sys_PropImpl.prototype.init___T__Lscala_Function1 = (function(key, valueFn) {
  this.key$1 = key;
  this.valueFn$1 = valueFn;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_sys_PropImpl.prototype.zero__ = (function() {
  return this.zero__O()
});
ScalaJS.c.scala_sys_PropImpl.prototype.underlying__ = (function() {
  return this.underlying__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_sys_PropImpl.prototype.or__Lscala_Function0__ = (function(alt) {
  return this.or__Lscala_Function0__O(alt)
});
ScalaJS.c.scala_sys_PropImpl.prototype.option__ = (function() {
  return this.option__Lscala_Option()
});
ScalaJS.c.scala_sys_PropImpl.prototype.clear__ = (function() {
  return ScalaJS.bV(this.clear__V())
});
ScalaJS.c.scala_sys_PropImpl.prototype.get__ = (function() {
  return this.get__T()
});
ScalaJS.c.scala_sys_PropImpl.prototype.setValue__O__ = (function(newValue) {
  return this.setValue__O__O(newValue)
});
ScalaJS.c.scala_sys_PropImpl.prototype.set__T__ = (function(newValue$2) {
  return this.set__T__T(newValue$2)
});
ScalaJS.c.scala_sys_PropImpl.prototype.isSet__ = (function() {
  return ScalaJS.bZ(this.isSet__Z())
});
ScalaJS.c.scala_sys_PropImpl.prototype.value__ = (function() {
  return this.value__O()
});
ScalaJS.c.scala_sys_PropImpl.prototype.key__ = (function() {
  return this.key__T()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_PropImpl = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_PropImpl.prototype = ScalaJS.c.scala_sys_PropImpl.prototype;
ScalaJS.is.scala_sys_PropImpl = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_PropImpl)))
});
ScalaJS.as.scala_sys_PropImpl = (function(obj) {
  if ((ScalaJS.is.scala_sys_PropImpl(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.PropImpl")
  }
});
ScalaJS.isArrayOf.scala_sys_PropImpl = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_PropImpl)))
});
ScalaJS.asArrayOf.scala_sys_PropImpl = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_PropImpl(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.PropImpl;", depth)
  }
});
ScalaJS.data.scala_sys_PropImpl = new ScalaJS.ClassTypeData({
  scala_sys_PropImpl: 0
}, false, "scala.sys.PropImpl", ScalaJS.data.java_lang_Object, {
  scala_sys_PropImpl: 1,
  scala_sys_Prop: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_PropImpl.prototype.$classData = ScalaJS.data.scala_sys_PropImpl;
//@ sourceMappingURL=PropImpl.js.map
