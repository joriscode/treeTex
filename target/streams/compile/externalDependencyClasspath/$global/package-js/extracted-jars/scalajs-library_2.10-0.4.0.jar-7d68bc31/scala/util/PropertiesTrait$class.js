ScalaJS.impls.scala_util_PropertiesTrait$class__scalaProps__Lscala_util_PropertiesTrait__Ljava_util_Properties = (function($$this) {
  var props = new ScalaJS.c.java_util_Properties().init___();
  var stream = $$this.pickJarBasedOn__Ljava_lang_Class().getResourceAsStream__T__Ljava_io_InputStream($$this.propFilename__T());
  if ((stream !== null)) {
    ScalaJS.impls.scala_util_PropertiesTrait$class__quietlyDispose__Lscala_util_PropertiesTrait__Lscala_Function0__Lscala_Function0__V($$this, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(props$1, stream$1) {
      return (function() {
        props$1.load__Ljava_io_InputStream__V(stream$1);
        return ScalaJS.bV(undefined)
      })
    })(props, stream)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(stream$1) {
      return (function() {
        stream$1.close__V();
        return ScalaJS.bV(undefined)
      })
    })(stream)))
  };
  return props
});
ScalaJS.impls.scala_util_PropertiesTrait$class__quietlyDispose__Lscala_util_PropertiesTrait__Lscala_Function0__Lscala_Function0__V = (function($$this, action, disposal) {
  try {
    action.apply$mcV$sp__V()
  } finally {
    try {
      disposal.apply$mcV$sp__V()
    } catch ($jsexc$) {
      if (ScalaJS.is.java_io_IOException($jsexc$)) {
        /*<skip>*/
      } else {
        throw $jsexc$
      }
    }
  }
});
ScalaJS.impls.scala_util_PropertiesTrait$class__propIsSet__Lscala_util_PropertiesTrait__T__Z = (function($$this, name) {
  return (!ScalaJS.anyRefEqEq(ScalaJS.modules.java_lang_System().getProperty__T__T(name), null))
});
ScalaJS.impls.scala_util_PropertiesTrait$class__propIsSetTo__Lscala_util_PropertiesTrait__T__T__Z = (function($$this, name, value) {
  return ScalaJS.anyRefEqEq($$this.propOrNull__T__T(name), value)
});
ScalaJS.impls.scala_util_PropertiesTrait$class__propOrElse__Lscala_util_PropertiesTrait__T__T__T = (function($$this, name, alt) {
  return ScalaJS.modules.java_lang_System().getProperty__T__T__T(name, alt)
});
ScalaJS.impls.scala_util_PropertiesTrait$class__propOrEmpty__Lscala_util_PropertiesTrait__T__T = (function($$this, name) {
  return $$this.propOrElse__T__T__T(name, "")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__propOrNull__Lscala_util_PropertiesTrait__T__T = (function($$this, name) {
  return $$this.propOrElse__T__T__T(name, null)
});
ScalaJS.impls.scala_util_PropertiesTrait$class__propOrNone__Lscala_util_PropertiesTrait__T__Lscala_Option = (function($$this, name) {
  return ScalaJS.modules.scala_Option().apply__O__Lscala_Option($$this.propOrNull__T__T(name))
});
ScalaJS.impls.scala_util_PropertiesTrait$class__propOrFalse__Lscala_util_PropertiesTrait__T__Z = (function($$this, name) {
  return $$this.propOrNone__T__Lscala_Option(name).exists__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x) {
      return ScalaJS.bZ(ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["yes", "on", "true"]), 1))).contains__O__Z(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__toLowerCase__Lscala_scalajs_runtime_RuntimeString__T(x)))
    })
  })()))
});
ScalaJS.impls.scala_util_PropertiesTrait$class__setProp__Lscala_util_PropertiesTrait__T__T__T = (function($$this, name, value) {
  return ScalaJS.modules.java_lang_System().setProperty__T__T__T(name, value)
});
ScalaJS.impls.scala_util_PropertiesTrait$class__clearProp__Lscala_util_PropertiesTrait__T__T = (function($$this, name) {
  return ScalaJS.modules.java_lang_System().clearProperty__T__T(name)
});
ScalaJS.impls.scala_util_PropertiesTrait$class__envOrElse__Lscala_util_PropertiesTrait__T__T__T = (function($$this, name, alt) {
  return ScalaJS.as.java_lang_String(ScalaJS.modules.scala_Option().apply__O__Lscala_Option(ScalaJS.modules.java_lang_System().getenv__T__T(name)).getOrElse__Lscala_Function0__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(alt$1) {
    return (function() {
      return alt$1
    })
  })(alt))))
});
ScalaJS.impls.scala_util_PropertiesTrait$class__envOrNone__Lscala_util_PropertiesTrait__T__Lscala_Option = (function($$this, name) {
  return ScalaJS.modules.scala_Option().apply__O__Lscala_Option(ScalaJS.modules.java_lang_System().getenv__T__T(name))
});
ScalaJS.impls.scala_util_PropertiesTrait$class__scalaPropOrElse__Lscala_util_PropertiesTrait__T__T__T = (function($$this, name, alt) {
  return $$this.scalaProps__Ljava_util_Properties().getProperty__T__T__T(name, alt)
});
ScalaJS.impls.scala_util_PropertiesTrait$class__scalaPropOrEmpty__Lscala_util_PropertiesTrait__T__T = (function($$this, name) {
  return $$this.scalaPropOrElse__T__T__T(name, "")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__scalaPropOrNone__Lscala_util_PropertiesTrait__T__Lscala_Option = (function($$this, name) {
  return ScalaJS.modules.scala_Option().apply__O__Lscala_Option($$this.scalaProps__Ljava_util_Properties().getProperty__T__T(name))
});
ScalaJS.impls.scala_util_PropertiesTrait$class__versionNumberString__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.scalaPropOrEmpty__T__T("version.number")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__sourceEncoding__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.scalaPropOrElse__T__T__T("file.encoding", "UTF-8")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__sourceReader__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.scalaPropOrElse__T__T__T("source.reader", "scala.tools.nsc.io.SourceReader")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__encodingString__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.propOrElse__T__T__T("file.encoding", "UTF-8")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__lineSeparator__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.propOrElse__T__T__T("line.separator", "\n")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__javaClassPath__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.propOrEmpty__T__T("java.class.path")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__javaHome__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.propOrEmpty__T__T("java.home")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__javaVendor__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.propOrEmpty__T__T("java.vendor")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__javaVersion__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.propOrEmpty__T__T("java.version")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__javaVmInfo__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.propOrEmpty__T__T("java.vm.info")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__javaVmName__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.propOrEmpty__T__T("java.vm.name")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__javaVmVendor__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.propOrEmpty__T__T("java.vm.vendor")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__javaVmVersion__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.propOrEmpty__T__T("java.vm.version")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__osName__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.propOrEmpty__T__T("os.name")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__scalaHome__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.propOrEmpty__T__T("scala.home")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__tmpDir__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.propOrEmpty__T__T("java.io.tmpdir")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__userDir__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.propOrEmpty__T__T("user.dir")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__userHome__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.propOrEmpty__T__T("user.home")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__userName__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.propOrEmpty__T__T("user.name")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__isWin__Lscala_util_PropertiesTrait__Z = (function($$this) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__startsWith__Lscala_scalajs_runtime_RuntimeString__T__Z($$this.osName__T(), "Windows")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__isMac__Lscala_util_PropertiesTrait__Z = (function($$this) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__startsWith__Lscala_scalajs_runtime_RuntimeString__T__Z($$this.javaVendor__T(), "Apple")
});
ScalaJS.impls.scala_util_PropertiesTrait$class__jdkHome__Lscala_util_PropertiesTrait__T = (function($$this) {
  return $$this.envOrElse__T__T__T("JDK_HOME", $$this.envOrElse__T__T__T("JAVA_HOME", $$this.javaHome__T()))
});
ScalaJS.impls.scala_util_PropertiesTrait$class__versionMsg__Lscala_util_PropertiesTrait__T = (function($$this) {
  return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("Scala %s %s -- %s")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [$$this.propCategory__T(), $$this.versionString__T(), $$this.copyrightString__T()])))
});
ScalaJS.impls.scala_util_PropertiesTrait$class__scalaCmd__Lscala_util_PropertiesTrait__T = (function($$this) {
  if ($$this.isWin__Z()) {
    return "scala.bat"
  } else {
    return "scala"
  }
});
ScalaJS.impls.scala_util_PropertiesTrait$class__scalacCmd__Lscala_util_PropertiesTrait__T = (function($$this) {
  if ($$this.isWin__Z()) {
    return "scalac.bat"
  } else {
    return "scalac"
  }
});
ScalaJS.impls.scala_util_PropertiesTrait$class__isJavaAtLeast__Lscala_util_PropertiesTrait__T__Z = (function($$this, version) {
  var x1 = version;
  matchEnd6: {
    if (ScalaJS.anyRefEqEq("1.5", x1)) {
      var okVersions = ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["1.5", "1.6", "1.7"]), 1)));
      break matchEnd6
    };
    if (ScalaJS.anyRefEqEq("1.6", x1)) {
      var okVersions = ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["1.6", "1.7"]), 1)));
      break matchEnd6
    };
    if (ScalaJS.anyRefEqEq("1.7", x1)) {
      var okVersions = ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["1.7"]), 1)));
      break matchEnd6
    };
    var okVersions = ScalaJS.modules.scala_collection_immutable_Nil();
    break matchEnd6
  };
  return okVersions.exists__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x$1) {
      return ScalaJS.bZ(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__startsWith__Lscala_scalajs_runtime_RuntimeString__T__Z(arg$outer.javaVersion__T(), x$1))
    })
  })($$this)))
});
ScalaJS.impls.scala_util_PropertiesTrait$class__main__Lscala_util_PropertiesTrait__AT__V = (function($$this, args) {
  var writer = new ScalaJS.c.java_io_PrintWriter().init___Ljava_io_OutputStream__Z(ScalaJS.modules.scala_Console().err__Ljava_io_PrintStream(), true);
  writer.println__T__V($$this.versionMsg__T())
});
ScalaJS.impls.scala_util_PropertiesTrait$class__$init$__Lscala_util_PropertiesTrait__V = (function($$this) {
  $$this.scala$util$PropertiesTrait$$undsetter$und$propFilename$und$eq__T__V((("/" + $$this.propCategory__T()) + ".properties"));
  $$this.scala$util$PropertiesTrait$$undsetter$und$releaseVersion$und$eq__Lscala_Option__V($$this.scalaPropOrNone__T__Lscala_Option("maven.version.number").withFilter__Lscala_Function1__Lscala_Option$WithFilter(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(v) {
      return ScalaJS.bZ((!ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__endsWith__Lscala_scalajs_runtime_RuntimeString__T__Z(v, "-SNAPSHOT")))
    })
  })())).map__Lscala_Function1__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(v) {
      return v
    })
  })())));
  $$this.scala$util$PropertiesTrait$$undsetter$und$developmentVersion$und$eq__Lscala_Option__V($$this.scalaPropOrNone__T__Lscala_Option("maven.version.number").withFilter__Lscala_Function1__Lscala_Option$WithFilter(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(v) {
      return ScalaJS.bZ(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__endsWith__Lscala_scalajs_runtime_RuntimeString__T__Z(v, "-SNAPSHOT"))
    })
  })())).flatMap__Lscala_Function1__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(v) {
      return arg$outer.scalaPropOrNone__T__Lscala_Option("version.number").map__Lscala_Function1__Lscala_Option(new ScalaJS.c.scala_util_PropertiesTrait$$anonfun$4$$anonfun$apply$1().init___Lscala_util_PropertiesTrait$$anonfun$4(this))
    })
  })($$this))));
  $$this.scala$util$PropertiesTrait$$undsetter$und$versionString$und$eq__T__V(("version " + $$this.scalaPropOrElse__T__T__T("version.number", "(unknown)")));
  $$this.scala$util$PropertiesTrait$$undsetter$und$copyrightString$und$eq__T__V($$this.scalaPropOrElse__T__T__T("copyright.string", "Copyright 2002-2013, LAMP/EPFL"))
});
//@ sourceMappingURL=PropertiesTrait$class.js.map
