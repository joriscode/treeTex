ScalaJS.impls.scala_sys_process_ProcessCreation$class__apply__Lscala_sys_process_ProcessCreation__T__Lscala_sys_process_ProcessBuilder = (function($$this, command$9) {
  return $$this.apply__T__Lscala_Option__Lscala_collection_Seq__Lscala_sys_process_ProcessBuilder(command$9, ScalaJS.modules.scala_None(), ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), []), 1)))
});
ScalaJS.impls.scala_sys_process_ProcessCreation$class__apply__Lscala_sys_process_ProcessCreation__Lscala_collection_Seq__Lscala_sys_process_ProcessBuilder = (function($$this, command) {
  return $$this.apply__Lscala_collection_Seq__Lscala_Option__Lscala_collection_Seq__Lscala_sys_process_ProcessBuilder(command, ScalaJS.modules.scala_None(), ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), []), 1)))
});
ScalaJS.impls.scala_sys_process_ProcessCreation$class__apply__Lscala_sys_process_ProcessCreation__T__Lscala_collection_Seq__Lscala_sys_process_ProcessBuilder = (function($$this, command, arguments$2) {
  var jsx$2 = $$this;
  var x$1 = command;
  var jsx$1 = ScalaJS.as.scala_collection_Seq(arguments$2.$$plus$colon__O__Lscala_collection_generic_CanBuildFrom__O(x$1, ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
  return jsx$2.apply__Lscala_collection_Seq__Lscala_Option__Lscala_collection_Seq__Lscala_sys_process_ProcessBuilder(jsx$1, ScalaJS.modules.scala_None(), ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), []), 1)))
});
ScalaJS.impls.scala_sys_process_ProcessCreation$class__apply__Lscala_sys_process_ProcessCreation__T__Ljava_io_File__Lscala_collection_Seq__Lscala_sys_process_ProcessBuilder = (function($$this, command, cwd, extraEnv) {
  return $$this.apply__T__Lscala_Option__Lscala_collection_Seq__Lscala_sys_process_ProcessBuilder(command, new ScalaJS.c.scala_Some().init___O(cwd), extraEnv)
});
ScalaJS.impls.scala_sys_process_ProcessCreation$class__apply__Lscala_sys_process_ProcessCreation__Lscala_collection_Seq__Ljava_io_File__Lscala_collection_Seq__Lscala_sys_process_ProcessBuilder = (function($$this, command, cwd, extraEnv) {
  return $$this.apply__Lscala_collection_Seq__Lscala_Option__Lscala_collection_Seq__Lscala_sys_process_ProcessBuilder(command, new ScalaJS.c.scala_Some().init___O(cwd), extraEnv)
});
ScalaJS.impls.scala_sys_process_ProcessCreation$class__apply__Lscala_sys_process_ProcessCreation__T__Lscala_Option__Lscala_collection_Seq__Lscala_sys_process_ProcessBuilder = (function($$this, command, cwd, extraEnv) {
  return $$this.apply__Lscala_collection_Seq__Lscala_Option__Lscala_collection_Seq__Lscala_sys_process_ProcessBuilder(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__split__Lscala_scalajs_runtime_RuntimeString__T__AT(command, "\\s+"), 1)), cwd, extraEnv)
});
ScalaJS.impls.scala_sys_process_ProcessCreation$class__apply__Lscala_sys_process_ProcessCreation__Lscala_collection_Seq__Lscala_Option__Lscala_collection_Seq__Lscala_sys_process_ProcessBuilder = (function($$this, command, cwd, extraEnv) {
  var jpb = new ScalaJS.c.java_lang_ProcessBuilder().init___AT(ScalaJS.asArrayOf.java_lang_String(command.toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().apply__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.data.java_lang_String.getClassOf())), 1));
  cwd.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(jpb$1) {
    return (function(x$2) {
      return jpb$1.directory__Ljava_io_File__Ljava_lang_ProcessBuilder(x$2)
    })
  })(jpb)));
  extraEnv.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(jpb$1) {
    return (function(x0$1) {
      var x1 = x0$1;
      if ((x1 !== null)) {
        var k = ScalaJS.as.java_lang_String(x1.$$und1__O());
        var v = ScalaJS.as.java_lang_String(x1.$$und2__O());
        return ScalaJS.as.java_lang_String(jpb$1.environment__Ljava_util_Map().put__O__O__O(k, v))
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })(jpb)));
  return $$this.apply__Ljava_lang_ProcessBuilder__Lscala_sys_process_ProcessBuilder(jpb)
});
ScalaJS.impls.scala_sys_process_ProcessCreation$class__apply__Lscala_sys_process_ProcessCreation__Ljava_lang_ProcessBuilder__Lscala_sys_process_ProcessBuilder = (function($$this, builder) {
  return new ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Simple().init___Lscala_sys_process_ProcessBuilder$__Ljava_lang_ProcessBuilder(ScalaJS.modules.scala_sys_process_ProcessBuilder(), builder)
});
ScalaJS.impls.scala_sys_process_ProcessCreation$class__apply__Lscala_sys_process_ProcessCreation__Ljava_io_File__Lscala_sys_process_ProcessBuilder$FileBuilder = (function($$this, file) {
  return new ScalaJS.c.scala_sys_process_ProcessBuilderImpl$FileImpl().init___Lscala_sys_process_ProcessBuilder$__Ljava_io_File(ScalaJS.modules.scala_sys_process_ProcessBuilder(), file)
});
ScalaJS.impls.scala_sys_process_ProcessCreation$class__apply__Lscala_sys_process_ProcessCreation__Ljava_net_URL__Lscala_sys_process_ProcessBuilder$URLBuilder = (function($$this, url) {
  return new ScalaJS.c.scala_sys_process_ProcessBuilderImpl$URLImpl().init___Lscala_sys_process_ProcessBuilder$__Ljava_net_URL(ScalaJS.modules.scala_sys_process_ProcessBuilder(), url)
});
ScalaJS.impls.scala_sys_process_ProcessCreation$class__apply__Lscala_sys_process_ProcessCreation__Lscala_xml_Elem__Lscala_sys_process_ProcessBuilder = (function($$this, command) {
  return $$this.apply__T__Lscala_sys_process_ProcessBuilder(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__trim__Lscala_scalajs_runtime_RuntimeString__T(command.text__T()))
});
ScalaJS.impls.scala_sys_process_ProcessCreation$class__apply__Lscala_sys_process_ProcessCreation__Z__Lscala_sys_process_ProcessBuilder = (function($$this, value) {
  return $$this.apply__T__Lscala_Function0__Lscala_sys_process_ProcessBuilder(ScalaJS.objectToString(ScalaJS.bZ(value)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(value$1) {
    return (function() {
      if (value$1) {
        var jsx$3 = 0
      } else {
        var jsx$3 = 1
      };
      return ScalaJS.bI(jsx$3)
    })
  })(value)))
});
ScalaJS.impls.scala_sys_process_ProcessCreation$class__apply__Lscala_sys_process_ProcessCreation__T__Lscala_Function0__Lscala_sys_process_ProcessBuilder = (function($$this, name, exitValue) {
  return new ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Dummy().init___Lscala_sys_process_ProcessBuilder$__T__Lscala_Function0(ScalaJS.modules.scala_sys_process_ProcessBuilder(), name, exitValue)
});
ScalaJS.impls.scala_sys_process_ProcessCreation$class__applySeq__Lscala_sys_process_ProcessCreation__Lscala_collection_Seq__Lscala_Function1__Lscala_collection_Seq = (function($$this, builders, convert) {
  return ScalaJS.as.scala_collection_Seq(builders.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(convert, ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
});
ScalaJS.impls.scala_sys_process_ProcessCreation$class__cat__Lscala_sys_process_ProcessCreation__Lscala_sys_process_ProcessBuilder$Source__Lscala_collection_Seq__Lscala_sys_process_ProcessBuilder = (function($$this, file, files) {
  var jsx$5 = $$this;
  var x$3 = file;
  var jsx$4 = ScalaJS.as.scala_collection_Seq(files.$$plus$colon__O__Lscala_collection_generic_CanBuildFrom__O(x$3, ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
  return jsx$5.cat__Lscala_collection_Seq__Lscala_sys_process_ProcessBuilder(jsx$4)
});
ScalaJS.impls.scala_sys_process_ProcessCreation$class__cat__Lscala_sys_process_ProcessCreation__Lscala_collection_Seq__Lscala_sys_process_ProcessBuilder = (function($$this, files) {
  ScalaJS.modules.scala_Predef().require__Z__V(files.nonEmpty__Z());
  return ScalaJS.as.scala_sys_process_ProcessBuilder(ScalaJS.as.scala_collection_TraversableOnce(files.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$4) {
      return x$4.cat__Lscala_sys_process_ProcessBuilder()
    })
  })()), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).reduceLeft__Lscala_Function2__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(x$5, x$6) {
      return x$5.$$hash$amp$amp__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder(x$6)
    })
  })())))
});
ScalaJS.impls.scala_sys_process_ProcessCreation$class__$init$__Lscala_sys_process_ProcessCreation__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=ProcessCreation$class.js.map
