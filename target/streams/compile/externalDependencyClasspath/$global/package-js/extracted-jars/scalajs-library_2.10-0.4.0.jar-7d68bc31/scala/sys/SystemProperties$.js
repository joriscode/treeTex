/** @constructor */
ScalaJS.c.scala_sys_SystemProperties$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.propertyHelp$1 = null;
  this.headless$1 = null;
  this.preferIPv4Stack$1 = null;
  this.preferIPv6Addresses$1 = null;
  this.noTraceSupression$1 = null;
  this.bitmap$0$1 = 0
});
ScalaJS.c.scala_sys_SystemProperties$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_SystemProperties$.prototype.constructor = ScalaJS.c.scala_sys_SystemProperties$;
ScalaJS.c.scala_sys_SystemProperties$.prototype.propertyHelp$lzycompute__p1__Lscala_collection_mutable_Map = (function() {
  if (((this.bitmap$0$1 & 1) === 0)) {
    this.propertyHelp$1 = ScalaJS.as.scala_collection_mutable_Map(ScalaJS.modules.scala_collection_mutable_Map().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_collection_immutable_Nil()));
    this.bitmap$0$1 = (this.bitmap$0$1 | 1)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.propertyHelp$1
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.headless$lzycompute__p1__Lscala_sys_BooleanProp = (function() {
  if (((this.bitmap$0$1 & 2) === 0)) {
    this.headless$1 = this.bool__p1__T__T__Lscala_sys_BooleanProp("java.awt.headless", "system should not utilize a display device");
    this.bitmap$0$1 = (this.bitmap$0$1 | 2)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.headless$1
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.preferIPv4Stack$lzycompute__p1__Lscala_sys_BooleanProp = (function() {
  if (((this.bitmap$0$1 & 4) === 0)) {
    this.preferIPv4Stack$1 = this.bool__p1__T__T__Lscala_sys_BooleanProp("java.net.preferIPv4Stack", "system should prefer IPv4 sockets");
    this.bitmap$0$1 = (this.bitmap$0$1 | 4)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.preferIPv4Stack$1
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.preferIPv6Addresses$lzycompute__p1__Lscala_sys_BooleanProp = (function() {
  if (((this.bitmap$0$1 & 8) === 0)) {
    this.preferIPv6Addresses$1 = this.bool__p1__T__T__Lscala_sys_BooleanProp("java.net.preferIPv6Addresses", "system should prefer IPv6 addresses");
    this.bitmap$0$1 = (this.bitmap$0$1 | 8)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.preferIPv6Addresses$1
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.noTraceSupression$lzycompute__p1__Lscala_sys_BooleanProp = (function() {
  if (((this.bitmap$0$1 & 16) === 0)) {
    this.noTraceSupression$1 = this.bool__p1__T__T__Lscala_sys_BooleanProp("scala.control.noTraceSuppression", "scala should not suppress any stack trace creation");
    this.bitmap$0$1 = (this.bitmap$0$1 | 16)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.noTraceSupression$1
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.exclusively__Lscala_Function0__O = (function(body) {
  return body.apply__O()
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.systemPropertiesToCompanion__Lscala_sys_SystemProperties__Lscala_sys_SystemProperties$ = (function(p) {
  return this
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.propertyHelp__p1__Lscala_collection_mutable_Map = (function() {
  if (((this.bitmap$0$1 & 1) === 0)) {
    return this.propertyHelp$lzycompute__p1__Lscala_collection_mutable_Map()
  } else {
    return this.propertyHelp$1
  }
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.addHelp__p1__Lscala_sys_Prop__T__Lscala_sys_Prop = (function(p, helpText) {
  this.propertyHelp__p1__Lscala_collection_mutable_Map().update__O__O__V(p.key__T(), helpText);
  return p
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.str__p1__T__T__Lscala_sys_Prop = (function(key, helpText) {
  return this.addHelp__p1__Lscala_sys_Prop__T__Lscala_sys_Prop(ScalaJS.modules.scala_sys_Prop().apply__T__Lscala_sys_Prop$Creator__Lscala_sys_Prop(key, ScalaJS.modules.scala_sys_Prop$StringProp()), helpText)
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.bool__p1__T__T__Lscala_sys_BooleanProp = (function(key, helpText) {
  if (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__startsWith__Lscala_scalajs_runtime_RuntimeString__T__Z(key, "java.")) {
    var jsx$2 = ScalaJS.modules.scala_sys_BooleanProp().valueIsTrue__T__Lscala_sys_BooleanProp(key)
  } else {
    var jsx$2 = ScalaJS.modules.scala_sys_BooleanProp().keyExists__T__Lscala_sys_BooleanProp(key)
  };
  var jsx$1 = this.addHelp__p1__Lscala_sys_Prop__T__Lscala_sys_Prop(jsx$2, helpText);
  return ScalaJS.as.scala_sys_BooleanProp(jsx$1)
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.help__T__T = (function(key) {
  return ScalaJS.as.java_lang_String(this.propertyHelp__p1__Lscala_collection_mutable_Map().getOrElse__O__Lscala_Function0__O(key, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return ""
    })
  })())))
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.headless__Lscala_sys_BooleanProp = (function() {
  if (((this.bitmap$0$1 & 2) === 0)) {
    return this.headless$lzycompute__p1__Lscala_sys_BooleanProp()
  } else {
    return this.headless$1
  }
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.preferIPv4Stack__Lscala_sys_BooleanProp = (function() {
  if (((this.bitmap$0$1 & 4) === 0)) {
    return this.preferIPv4Stack$lzycompute__p1__Lscala_sys_BooleanProp()
  } else {
    return this.preferIPv4Stack$1
  }
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.preferIPv6Addresses__Lscala_sys_BooleanProp = (function() {
  if (((this.bitmap$0$1 & 8) === 0)) {
    return this.preferIPv6Addresses$lzycompute__p1__Lscala_sys_BooleanProp()
  } else {
    return this.preferIPv6Addresses$1
  }
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.noTraceSupression__Lscala_sys_BooleanProp = (function() {
  if (((this.bitmap$0$1 & 16) === 0)) {
    return this.noTraceSupression$lzycompute__p1__Lscala_sys_BooleanProp()
  } else {
    return this.noTraceSupression$1
  }
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.noTraceSupression__ = (function() {
  return this.noTraceSupression__Lscala_sys_BooleanProp()
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.preferIPv6Addresses__ = (function() {
  return this.preferIPv6Addresses__Lscala_sys_BooleanProp()
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.preferIPv4Stack__ = (function() {
  return this.preferIPv4Stack__Lscala_sys_BooleanProp()
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.headless__ = (function() {
  return this.headless__Lscala_sys_BooleanProp()
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.help__T__ = (function(key) {
  return this.help__T__T(key)
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.systemPropertiesToCompanion__Lscala_sys_SystemProperties__ = (function(p) {
  return this.systemPropertiesToCompanion__Lscala_sys_SystemProperties__Lscala_sys_SystemProperties$(p)
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.exclusively__Lscala_Function0__ = (function(body) {
  return this.exclusively__Lscala_Function0__O(body)
});
/** @constructor */
ScalaJS.inheritable.scala_sys_SystemProperties$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_SystemProperties$.prototype = ScalaJS.c.scala_sys_SystemProperties$.prototype;
ScalaJS.is.scala_sys_SystemProperties$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_SystemProperties$)))
});
ScalaJS.as.scala_sys_SystemProperties$ = (function(obj) {
  if ((ScalaJS.is.scala_sys_SystemProperties$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.SystemProperties")
  }
});
ScalaJS.isArrayOf.scala_sys_SystemProperties$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_SystemProperties$)))
});
ScalaJS.asArrayOf.scala_sys_SystemProperties$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_SystemProperties$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.SystemProperties;", depth)
  }
});
ScalaJS.data.scala_sys_SystemProperties$ = new ScalaJS.ClassTypeData({
  scala_sys_SystemProperties$: 0
}, false, "scala.sys.SystemProperties$", ScalaJS.data.java_lang_Object, {
  scala_sys_SystemProperties$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_SystemProperties$.prototype.$classData = ScalaJS.data.scala_sys_SystemProperties$;
ScalaJS.moduleInstances.scala_sys_SystemProperties = undefined;
ScalaJS.modules.scala_sys_SystemProperties = (function() {
  if ((!ScalaJS.moduleInstances.scala_sys_SystemProperties)) {
    ScalaJS.moduleInstances.scala_sys_SystemProperties = new ScalaJS.c.scala_sys_SystemProperties$().init___()
  };
  return ScalaJS.moduleInstances.scala_sys_SystemProperties
});
//@ sourceMappingURL=SystemProperties$.js.map
